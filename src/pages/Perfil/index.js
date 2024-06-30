import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();

    function VoltarTela() {
        navigation.navigate('Home');
    }

    return (
        <ScrollView>

            <View style={styles.ContainerHeader}>
                <TouchableOpacity onPress={VoltarTela}>
                    <Image
                        source={require('./../../../assets/seta.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.ContainerPrincipal}>



                <View style={styles.ContainerImage}>
                    <Image
                        source={require('./../../../assets/perfil.png')}
                        style={styles.ImagePerfil} />
                </View>

                <View>
                    <Text style={styles.ContainerTextinho}>
                        NOME DA PESSOA
                    </Text>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.BotaoJogadoRecentemente}>

                        <Text style={styles.TextoJogarNovamente}>
                            Jogado Recentemente
                        </Text>

                    </TouchableOpacity>
                </View>

                <View style={styles.ContainerInput}>

                    <View style={styles.ContainerImgJogo}>
                        <Image
                            source={require('./../../../assets/reddead.png')}
                            style={styles.ImageRedDead} />
                    </View>

                    <View>
                        <Text style={styles.Titulo}>
                            Red Dead Redemption{'\n'}2
                        </Text>

                        <Text style={styles.texto}>
                            Jogado : {'\n'}
                            90 horas
                        </Text>
                    </View>
                </View>
            </View>


        </ScrollView>
    );
}