import { StyleSheet } from "react-native";
import { FlatList } from "react-native-web";

export default StyleSheet.create({
    ContainerPrincipal:{
        height: '100%',
        backgroundColor: '#212121',
        padding: 20
    },
    ContainerImage:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 19
    },
    IconSearchStyle:{
        justifyContent: 'center',
        alignItems:'flex-end',
        marginBottom: 25
    },
    ImageLogoPrincipal:{
        height: 67
    },
    ContainerJogos:{
        gap: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }

});