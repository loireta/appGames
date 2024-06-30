import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function DescricaoJogo() {

  const navigation = useNavigation();

    function VoltarTela() {
        navigation.navigate('Home');
    }
  return (
    <ScrollView>
      <View style={styles.ContainerPrincipal}>

        <View>
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

        <View style={styles.ContainerJogo}>
          <Image
            source={require('./../../../assets/last.png')}
            style={styles.Imagelast} />
        </View>

        <View style={styles.ContainerPergunta}>
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
          <Text style={styles.DescricaoGame}>
            tem uma história incrível, um dos melhores jogos q ja joguei.
          </Text>
        </View>
      </View>


    </ScrollView>
  );
}