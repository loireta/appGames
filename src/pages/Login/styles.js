import { StyleSheet } from "react-native";

export default StyleSheet.create({
    ContainerPrincipal: {
        backgroundColor: '#212121',
        alignItems: 'center',
        height: 700
    },
    inputEmail: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        padding: 8,
        borderRadius: 10,
        width: "100%",
        height: 41,
        borderColor: '#A9A9A9',
        color: '#000000',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        fontSize: 10,
        backgroundColor: 'white'
    },
    inputSenha: {
        borderWidth: 1,
        borderColor: '#FFFFFF',
        padding: 8,
        borderRadius: 10,
        width: "100%",
        height: 41,
        borderColor: '#A9A9A9',
        color: '#000000',
        shadowColor: '#000',

        shadowOpacity: 0.2,
        fontSize: 10,
        backgroundColor: 'white'
    },
    ContainerInput: {
        backgroundColor: '#D9D9D9',
        width: '100%',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        gap: 7,
        paddingHorizontal: 19,
        marginTop: 68,
        marginBottom: 74
    },
    ContainerDoInput:{
        paddingHorizontal: 30,
        width: '100%'
    },
    ContainerImage:{
        marginTop: 76,
        marginHorizontal: 47
    },
    ImageLogo:{
        height: 95,
        width: 99
    },
    ContainerGoogle:{
        width: 243,
        height: 42,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 83,
    },
    BotaoCriarConta:{
        height: 41,
        width: 140,
        borderWidth: 1,
        borderColor: '#A9A9A9',
        backgroundColor: '#FFFFFF',
        fontSize: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    BotaoEntrar:{
        height: 41,
        width: 140,
        borderWidth: 1,
        borderColor: '#A9A9A9',
        backgroundColor: '#000000',
        fontSize: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    TextoBotaoEntrar:{
        color: 'white'
    },
    ouContainer:{
        width: '100%',
        height: 20,
        marginBottom: 21,
    },
    barraHorizontal:{
        width: '100%',
        height: 1,
        backgroundColor: 'white',
        marginBottom: 14
    },
    containerBotoes:{
        flex: 1,
        flexDirection: 'row',
        gap: 37,
        alignItems: 'center'
    }
});