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
        marginBottom: 19,

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
        width: 237,
        borderRadius: 20,
        alignSelf: 'center',
        height: 132,
        padding: 8,
        marginTop: 24
    },
    ContainerText: {
        fontSize: 10,
        color: 'white',
        alignSelf: 'center'
    },
    ImageLogo:{
        height: 126,
        width: 116
    },
    DescricaoGame:{
        color: 'black',
        fontSize: 15,
        fontWeight: 'black'
    },
    ContainerJogo:{
        marginBottom: 24,
        marginTop: 34,
        alignSelf: 'center'
    },
    ContainerPergunta:{
        marginBottom: 9
    }
});