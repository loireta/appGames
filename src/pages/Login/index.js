import { View, TextInput, Image, ScrollView } from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  function acessarHome() {
    navigation.navigate('Home');
  }

  return (
    <ScrollView>
      <View style={styles.ContainerPrincipal}>
        <Image source={require('./../../../assets/logo.png')} />
      </View>

      <View>
        <TextInput
          style={styles.inputEmail}
          placeholder="Endereço de email ou número de telefone"
        />

        <TextInput
          style={styles.inputSenha}
          placeholder="Senha"
        />
      </View>
      
    </ScrollView>
  );
}
