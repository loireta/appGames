import { View, Text, Image } from "react-native"
import styles from './styles';

 
export default function Home(){
   
    
   
    return (

        <View style={styles.ContainerPrincipal}>

            <View>
            <Image source={require('./../../../assets/logo.png')} />
            </View>

        <Text style={styles.Teste}>
            OI
        </Text>
        
        </View>
    );
}