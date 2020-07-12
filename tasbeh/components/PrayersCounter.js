import React, { Component } from 'react';
import {
    View,
    Text,
    ToastAndroid,
    TouchableOpacity,
} from 'react-native'
import styles from './style';

export default class PrayersCounter extends Component {


    state = {
        count: 0,
        index: 0,
    };

    onPressAfterPrayer = () => {

        if (this.state.count === 32) {
            this.setState({
                index: this.state.index + 1,
                count: 0,
            })
        } else if (this.state.index === 3) {
            ToastAndroid.show('تقبل الله وغفر لك', ToastAndroid.LONG);
            this.props.navigation.goBack()
        } else {
            this.setState({
                count: this.state.count + 1
            })
        }
    };

    onPressEraseSins = () => {
        if (this.state.count < 99) {
            this.setState({
                count: this.state.count + 1
            })
        } else {
            ToastAndroid.show('تقبل الله وغفر لك', ToastAndroid.LONG);
            this.props.navigation.goBack()
        }

    };

    render() {
        const { index, count } = this.state;
        const { route, navigation } = this.props;
        const item = route.params.item;
        navigation.setOptions({
            title: item.title
        });


        const buttonText = function () {
            if (item.prays) {
                if (index === 3)
                    return <Text style={styles.buttonText}>الرجوع الي القائمة</Text>
                else
                    return <Text style={styles.buttonText}>{item.prays[index]}</Text>
            } else {
                return <Text style={styles.buttonText}>{item.pray}</Text>
            }
        };

        const textHandler = function () {
            if (index === 3)
                return (
                    <View style={styles.numbersContainer}>
                        <Text style={styles.textStyle}>{item.prays[index]}</Text>
                    </View>
                );

            else return (
                <View style={styles.numbersContainer}>
                    <Text style={styles.textStyle}>{count}</Text>
                    <Text style={styles.textStyle}>/{item.PrayLimit}</Text>
                </View>
            )
        };


        return (
            <View style={styles.container}>
                {textHandler()}

                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                        if (item.key === 1)
                            this.onPressAfterPrayer();
                        else if (item.key === 2)
                            this.onPressEraseSins();
                    }}>

                    {buttonText()}
                </TouchableOpacity>
            </View>
        );
    }
}