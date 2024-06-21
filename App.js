import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Cadastrar from './src/pages/Cadastrar';
import Login from './src/pages/Login';
import DescricaoJogo from './src/pages/DescricaoJogo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DescricaoJogo"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DescricaoJogo" component={DescricaoJogo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}