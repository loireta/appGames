import { StyleSheet } from "react-native";

export default StyleSheet.create({
    ContainerPrincipal: {
        backgroundColor: '#212121',
        alignItems: 'center',
        height: 700
    },
    ContainerText: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 20,
        color: '#FF8000',
    },
    ContainerImage:{
        marginTop: 15,
    },
    ContainerTexto: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 43,
        color: 'white',

    },

    ContainerInput: {
        backgroundColor: '#4A4A4A',
        width: '30%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        gap: 7,
        paddingHorizontal: 19,
        marginTop: -30,
        marginBottom: 74,
        borderWidth: 2, // Define a espessura da borda
        borderColor: 'white' // Define a cor da borda
    },
});
