import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Cadastrar from './src/pages/Cadastrar';
import Login from './src/pages/Login';
import DescricaoGame from './src/pages/DescricaoGame';
import AdicionarJogo from './src/pages/AdicionarJogo';
import Perfil from './src/pages/Perfil';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DescricaoGame"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DescricaoGame" component={DescricaoGame} />
        <Stack.Screen name="AdicionarJogo" component={AdicionarJogo} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}