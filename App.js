import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.login}>
        <TextInput
          style={estilos.input}
          placeholder='Usuário ou e-mail'
          secureTextEntry />

        <Text style={estilos.texto}>
        </Text>
        <TextInput
          style={estilos.input}
          placeholder='Senha'
          secureTextEntry={true} />
        
      <TouchableOpacity style={estilos.viewPassoword}>
          <Text>
            Esqueci minha senha!
          </Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={estilos.button}>
        <Text>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  login: {
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 8,
    width: "75%",
    gap: 8
  },
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 12
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width: "80%",
    backgroundColor: '#FFF'
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
  },
  viewPassoword: {
  color: '#000',
  padding: 8,
  fontSize: 12,
  textDecorationLine: "underline",
},
sombra: {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.8,
  shadowRadius: 50,
}
});