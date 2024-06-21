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
                        source={require('./../../../assets/procurarIcon.png')}
                        style={styles.ImageSearchIcon} />
                </View>

                <View style={styles.ContainerJogos}>
                    <Image
                        source={require('./../../../assets/bandleTale.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/images1.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/coup.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/download3.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/imagemtlou.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/download4.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/download1.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/download5.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/shopping1.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/download6.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/download2.png')}
                        style={styles.ImageSearchIcon} />

                    <Image
                        source={require('./../../../assets/download7.png')}
                        style={styles.ImageSearchIcon} />


                </View>




            </View>
        </ScrollView>
    );
}