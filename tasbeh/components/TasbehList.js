import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,

} from 'react-native';
import tasbehData from '../data/tasbehat.json'



export default class TasbehList extends Component {
    render() {
        const tasbehat = tasbehData;
        const styles2 = this.props.styles;
        return (
            <FlatList
                data={tasbehat}
                keyExtractor={(item) => item.key.toString()}
                renderItem={
                    ({ item }) =>
                        <TouchableWithoutFeedback
                            onPress={(navigation) => {
                                if (item.key === 1 || item.key === 2)
                                    this.props.navigation.navigate('PrayersCounter',
                                        {
                                            item,
                                            title: item.title
                                        });
                                else
                                    this.props.navigation.navigate('OneTimePray',
                                        {
                                            item,
                                            title: item.title
                                        });
                            }
                            }>

                            <View name='ListItem' style={styles.listItem}
                                onPress={() => alert('Hello')}>
                                <Text style={[styles.textStyle, styles.title]}>{item.title}</Text>
                                <Text style={[styles.textStyle, styles.hadeth]}>{item.hadeth}</Text>
                                <Text style={[styles.textStyle, styles.source]}>{item.source}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        padding: 10,
        height: 'auto',
        color: 'white'
    },
    title: {
        fontSize: 40,
    },
    hadeth: {
        fontSize: 18,
    },
    source: {
        backgroundColor: '#3e3e3e'
    },
    listItem: {
        margin: 1,
        backgroundColor: 'black'
    }
});

