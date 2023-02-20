import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
    },

    Title: {
        fontSize: 30,
        fontFamily: 'serif',
        fontWeight: 'bold',
        alignItems: 'center',
        paddingBottom: 50
    },

    scrollContent:{
        justifyContent: 'space-evenly',
        flex: 1,
        alignItems: 'center',
    },

    inputText: {
        fontSize: 20,
        fontFamily: 'serif',
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'serif',
    },
      
    radioStyle: {
        flexDirection: 'row',
        borderRadius: 200,
        paddingTop: 10
    },

    RadioText: {
        fontSize: 20,
        fontFamily: 'serif',
    },

    textinput: {
        borderWidth: 2,
        borderRadius: 5,
        height: 50,
        margin: 5,
        backgroundColor: '#e0dbdb',
        width: 130,
        fontSize: 15,
        textAlign: 'center'
    },

    button: {
        justifyContent: 'center',
        border: '10 solid',
    },

    Output: {
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        margin: 10
    }
});

export {Styles};