import {
    StyleSheet,
} from 'react-native'

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20
    },
    textStyle: {
        color: 'white',
        fontSize: 50,
        marginBottom: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 50,
    },
    buttonStyle: {
        marginBottom: 10,
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 0.5
    },
    numbersContainer: {
        flexDirection: 'row',
    }
});