import { View, TextInput, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();

    function VoltarTela() {
        navigation.navigate('Home');
    }

    return (
        <ScrollView>
            <View style={styles.ContainerPrincipal}>

                <View style={styles.ContainerHeader}>
                    <TouchableOpacity onPress={VoltarTela}>
                        <Image
                            source={require('./../../../assets/seta.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.ContainerImage}>
                    <Image
                        source={require('./../../../assets/logo.png')}
                        style={styles.ImageLogo} />
                </View>

                <View>
                    <Text style={styles.TextoAdicionarJogo}>ADICIONAR JOGO</Text>
                </View>

                <View style={styles.ContainerImage}>
                    <Image
                        source={require('./../../../assets/linha2.png')} />
                </View>

                <View>
                    <Text style={styles.ContainerTexto}>
                        ESCANEAR JOGO
                    </Text>
                </View>


                <View style={styles.ContainerInput}>
                    <Image
                        source={require('./../../../assets/camera.png')}/>
                </View>

                <View>
                    <Text style={styles.ContainerTexto}>
                        PESQUISAR JOGO
                    </Text>
                </View>

                <View style={styles.ContainerInput}>
                    <Image
                        source={require('./../../../assets/procurar.png')}/>
                </View>



            </View>


        </ScrollView>
    );
}