import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>

<Image source={require("./assets/Logo.png")} />

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
          <Text style={estilos.texto2} >
            Esqueci minha senha!
          </Text>
        </TouchableOpacity>

      </View>

      <Image source={require("./assets/linhas.png")} style={estilos.linhas}  />

      <TouchableOpacity style={estilos.button1}>
      <Image source={require("./assets/Google.png")} />
      </TouchableOpacity>

      <Image source={require("./assets/Entrar.png")} style={estilos.linha}  />

  <View style={estilos.flex}>
      <TouchableOpacity style={estilos.button2}>
        <Text>
          Criar Conta
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.button3}>
        <Text style={estilos.texto}>
          Entrar
        </Text>
      </TouchableOpacity>
      </View>
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
    gap: 20,
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
    backgroundColor: '#FFF',
  },
  button1: {
    backgroundColor: "#fff",
    paddingHorizontal: 80,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 50,
  },

  button2: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
  },

  button3: {
    backgroundColor: "#000",
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
},

flex: {
flexDirection: 'row',
gap: 20,
},

linhas: {
  marginTop: 20,
},

texto2: {
  textDecorationLine: 'underline',
}
});