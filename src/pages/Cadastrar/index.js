import { View, TextInput, Image, ScrollView, TouchableOpacity, Text } from "react-native";
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
 
 
        <View style={styles.ContainerImage}>
          <Image
            source={require('./../../../assets/logo.png')}
            style={styles.ImageLogo} />
        </View>
 
        <View style={styles.ContainerPaiInput}>
        <View style={styles.ContainerInput}>
          <TextInput
            style={styles.inputNomeCompleto}
            placeholder="Nome Completo"
          />
 
          <TextInput
            style={styles.inputEmail}
            placeholder="Endereço de email ou número de telefone"
          />
 
          <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
          />
 
          <TextInput
            style={styles.inputConfirmarSenha}
            placeholder="Confirmar Senha"
          />
        </View>
        </View>
 
 
        <View style={styles.barraHorizontal}>
        </View>
 
 
        <View style={styles.containerBotoes}>
 
          <TouchableOpacity onPress={acessarHome}
            style={styles.BotaoCriarConta}>
 
            <Text style={styles.TextoBotaoCriarConta}>
              Criar conta
            </Text>
 
          </TouchableOpacity>
 
 
 
        </View>
 
      </View>
 
    </ScrollView>
  );
}
 