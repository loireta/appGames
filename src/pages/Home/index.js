import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    function acessarDetalhes() {
        navigation.navigate('DescricaoGame');
    }
    function acessarAdicionarJogo() {
        navigation.navigate('AdicionarJogo');
    }
    function acessarPerfil() {
        navigation.navigate('Perfil');
    }


    return (
        <ScrollView style={styles.ScrollViewStyle}>

            <View style={styles.ContainerPrincipal}>


                <View style={styles.ContainerHeader}>

                    <TouchableOpacity onPress={acessarPerfil}>
                    <Image
                        source={require('./../../../assets/menu.png')}
                        style={styles.ImageMenu} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={acessarAdicionarJogo}>
                        <Image
                            source={require('./../../../assets/sinalmais.png')}
                            style={styles.ImageSinalMais} />
                    </TouchableOpacity>


                </View>


                <View style={styles.ContainerImage}>


                    <Image
                        source={require('./../../../assets/logo.png')}
                        style={styles.ImageLogoPrincipal} />




                </View>

                <View style={styles.IconSearchStyle}>
                    <Image
                        source={require('./../../../assets/procurar.png')}
                        style={styles.ImageSearchIcon} />
                </View>

                <View style={styles.ContainerJogos}>

                    <Image
                        source={require('./../../../assets/bandleTale.png')} />

                    <Image
                        source={require('./../../../assets/callofduty.png')} />

                    <Image
                        source={require('./../../../assets/coup.png')} />

                    <Image
                        source={require('./../../../assets/fifa.png')} />

                    <TouchableOpacity onPress={acessarDetalhes}>
                        <Image
                            source={require('./../../../assets/last.png')} />
                    </TouchableOpacity>
                    <Image
                        source={require('./../../../assets/residentevil.png')} />

                    <Image
                        source={require('./../../../assets/granturismo.png')} />

                    <Image
                        source={require('./../../../assets/mortalkombat.png')} />

                    <Image
                        source={require('./../../../assets/gta5.png')} />

                    <Image
                        source={require('./../../../assets/spiderman.png')} />

                    <Image
                        source={require('./../../../assets/reddead.png')} />

                    <Image
                        source={require('./../../../assets/crash.png')} />


                </View>




            </View>
        </ScrollView>
    );
}