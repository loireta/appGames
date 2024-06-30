import { StyleSheet } from "react-native";
import { FlatList } from "react-native-web";

export default StyleSheet.create({
    ContainerPrincipal:{
        backgroundColor: '#212121',
        padding: 20
    },
    ContainerImage:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 19,
        flexDirection: 'row'
    },

    ImageLogoPrincipal: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        height: 67
    },  
    ImageSinalMais: {
        height: 38,
        width: 48
    },  
    ImageMenu: {
        height: 38,
        width: 48
    },  
    IconSearchStyle:{
        justifyContent: 'center',
        alignItems:'flex-end',
        marginBottom: 25
    },
    ContainerJogos:{
        gap: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageSearchIcon:{
        height: 37,
        width: 37
    },
    ContainerHeader:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    ScrollViewStyle:{
        flex: 1
    }

});