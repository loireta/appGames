import { View, TextInput, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const navigation = useNavigation();

  function acessarHome() {
    navigation.navigate('Home');
  }

  function acessarCadastrar() {
    navigation.navigate('Cadastrar');
  }

  return (
    <ScrollView>
      <View style={styles.ContainerPrincipal}>

        

        <View style={styles.ContainerImage}>
          <Image
            source={require('./../../../assets/logo.png')}
            style={styles.ImageLogo} />
        </View>

        <View style={styles.ContainerDoInput}>
        <View style={styles.ContainerInput}>
          <TextInput
            style={styles.inputEmail}
            placeholder="Endereço de email ou número de telefone"
          />

          <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
          />
        </View>

        </View>


        <View style={styles.ouContainer}>

        </View>

        <View>
          <TouchableOpacity onPress={acessarHome}
          style={styles.ContainerGoogle}>

          <Image
            source={require('./../../../assets/Google.png')} />
          
          </TouchableOpacity>
        </View>

        <View style={styles.barraHorizontal}>
        </View>

        <View style={styles.containerBotoes}>

          <TouchableOpacity onPress={acessarCadastrar}
            style={styles.BotaoCriarConta}>

            <Text style={styles.TextoBotaoCriarConta}>
              Criar conta
            </Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={acessarHome}
            style={styles.BotaoEntrar}>

            <Text style={styles.TextoBotaoEntrar}>
              Entrar
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </ScrollView>
  );
}
