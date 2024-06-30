import { StyleSheet } from "react-native";

export default StyleSheet.create({
    ContainerPrincipal: {
        backgroundColor: '#212121',
        height: 700,
        padding: 19
    },
    TextoAdicionarJogo: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 33,
        marginBottom: 20,
        color: '#FF8000',
    },
    ContainerImage:{
        marginTop: 15,
        alignSelf: 'center'
    },
    ContainerTexto: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        marginVertical: 27

    },
    ContainerInput: {
        backgroundColor: '#4A4A4A',
        width: 134,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 109,
        borderWidth: 2, 
        borderColor: 'white'
    },
    ContainerHeader:{
        justifyContent: 'flex-start'
    },
    ImageLogo:{
        alignSelf: 'center'
    }
});
