import { View, Text, Image, ScrollView } from "react-native";
import styles from './styles';

export default function Home() {


    return (
        <ScrollView>

            <View style={styles.ContainerPrincipal}>

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
                        source={require('./../../../assets/bandleTale.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/callofduty.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/coup.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/fifa.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/last.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/residentevil.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/granturismo.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/mortalkombat.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/gta5.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/spiderman.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/reddead.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/crash.png')}
                        style={styles.ImageSearchIcon} />


                </View>




            </View>
        </ScrollView>
    );
}