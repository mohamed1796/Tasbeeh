import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView, ToastAndroid
} from 'react-native'
import styles from './style'

export default class OneTimePray extends Component {


    render() {
        const { route, navigation } = this.props;
        const item = route.params.item;
        navigation.setOptions({
            title: item.title
        });
        return (
            <ScrollView style={{
                flex: 1,
                backgroundColor: 'black',
            }}>

                <View style={styles.container}>
                    <Text style={styles.textStyle}>{item.pray}</Text>

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => {
                            ToastAndroid.show('تقبل الله وغفر لك', ToastAndroid.LONG);
                            navigation.goBack()
                        }}>
                        <Text style={styles.buttonText}>الرجوع الي القائمة</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        );
    }
}