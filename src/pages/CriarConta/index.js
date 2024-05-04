import { View, Text, Image } from "react-native";
import styles from './styles';

export default function CriarConta({ route, navigation}){
    const { pesquisa } = route.params;
    return(
        <View style={styles.container}>
            <Image source = {require('./../../../assets/Google.png')}
            />
            <Text>
                Estou na Cadastro
            </Text>
            <Text>
                Palavra buscada: {pesquisa}
            </Text>
        </View>
    );
}