import { StyleSheet } from "react-native";
import { FlatList } from "react-native-web";

export default StyleSheet.create({
    ContainerPrincipal:{
        height: '200%',
        backgroundColor: '#212121',
        padding: 20
    },
    ContainerImage:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 19
    },
    ContainerText: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10
    },
    ContainerImg: {
        marginHorizontal: 90,  // Diminuído de -40 para -20
        flexDirection: 'row',
        
    },
    ImageEstrela: {
        width: 30,  // Adiciona largura fixa
        height: 30  // Adiciona altura fixa
    },
    ContainerInput: {
        backgroundColor: 'white',
        width: '50%',
        borderRadius: 10,
        alignSelf: 'center',
        height: 100,
        gap: 7,
        paddingHorizontal: 5,
        marginTop: 68,
    },
    ContainerTxt: {
        fontSize: 12,
        color: 'black'
    },
});