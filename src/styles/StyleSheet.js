import { StyleSheet } from "react-native";

// Estilização das paginas

export const estilos = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'silver',
        textAlign: 'center'
    },



    TextoOne: {
        fontSize: 50,
        color: 'black',
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        marginBottom: 15,
        textAlign: 'center',

    },

    TextoTwo: {
        fontSize: 35,
        color: 'black',
        paddingBottom: 10,
        textAlign: 'center',
        color: 'blue'
    },

    TextoThree: {
        fontSize: 25,
        color: 'black',
        textAlign: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,

    },

    btn: {
        height: 50,
        width: 130,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 20,
        shadowColor: 'blue',
        shadowRadius: 15,
        backgroundColor: 'blue',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',


    },

    btn2: {
        height: 50,
        width: 150,
        borderColor: 'black',
        borderWidth: 2,
        shadowColor: 'black',
        shadowRadius: 15,
        backgroundColor: 'black',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',


    },


    title: {
        color: 'white',
    },

    title2: {
        color: 'white',
        fontStyle: 'italic',
    },

    imagembotao: {
        height: 40,
        width: 120,
        borderRadius: 20,
        shadowColor: 'red',
        shadowRadius: 20,
    }

})