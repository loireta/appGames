import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CriarConta from './src/pages/CriarConta';
import EntrarConta from './src/pages/EntrarConta';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="EntrarConta"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="EntrarConta" component={EntrarConta} />
        <Stack.Screen name="CriarConta" component={CriarConta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}