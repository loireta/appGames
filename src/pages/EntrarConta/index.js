import { View, Text, TouchableOpacity } from "react-native";
import styles from './styles';
import { TextInput } from "react-native-web";
import { useState } from "react";

export default function EntrarConta({ navigation }){

    const [busca, setBusca] = useState('');
    function acessarCriarConta(){
        navigation.navigate(
            'CriarConta',
            { pesquisa: busca }
        );

    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Busca
            </Text>
            <TextInput
                value={busca}
                onChangeText={(text) => setBusca(text)}
                style={styles.input}
            />
            <TouchableOpacity
                onPress={acessarCriarConta}
                style={styles.button}
                >
                <Text>
                    Buscar
                </Text>
            </TouchableOpacity>
        </View>
    );
}