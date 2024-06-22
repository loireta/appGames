import { View, Image, ScrollView, Text } from "react-native";
import styles from './styles';
 
export default function DescricaoJogo() {
 
  return (
    <ScrollView>
      <View style={styles.ContainerPrincipal}>
 
 
        <View style={styles.ContainerImage}>
          <Image
            source={require('./../../../assets/logo.png')}
            style={styles.ImageLogo} />
        </View>
 
        <View style={styles.ContainerImage}>
          <Image
            source={require('./../../../assets/last.png')}
            style={styles.Imagelast} />
        </View>
 
        <View>
            <Text style={styles.ContainerText}>
              O que vc achou do jogo?
            </Text>
        </View>
 
        <View style={styles.ContainerImg}>
          <Image
            source={require('./../../../assets/estrela1.png')}
            style={styles.ImageEstrela} />
 
          <Image
            source={require('./../../../assets/estrela1.png')}
            style={styles.ImageEstrela} />
 
          <Image
            source={require('./../../../assets/estrela1.png')}
            style={styles.ImageEstrela} />
 
          <Image
            source={require('./../../../assets/estrela1.png')}
            style={styles.ImageEstrela} />
 
          <Image
            source={require('./../../../assets/estrela1.png')}
            style={styles.ImageEstrela} />
        </View>
 
        <View style={styles.ContainerInput}>
            <Text style={styles.ContainerText}>
                tem uma história incrível, um dos melhores jogos q ja joguei.
            </Text>
        </View>
      </View>
 
 
    </ScrollView>
  );
}