import { StyleSheet } from "react-native";

export default StyleSheet.create({
        container: {
          backgroundColor: '#0e0e0e',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8
        },
      
        campos: {
          backgroundColor: "#030303",
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          width: "88%",
          borderRadius: 8,
          paddingTop: 15,
          paddingBottom: 15,
          marginTop: -60,
        },
      
        input: {
          backgroundColor: '#fff',
          width: "80%",
          paddingHorizontal: 8,
          borderWidth: 1,
          borderRadius: 8,
        },
      
        texto1: {
          color: "#00B14D",
          fontSize: 12,
        },
      
        texto2: {
          color: "#fff",
          fontSize: 15,
        },
      
        alerta: {
          color: "#ff0000",
          fontSize: 12,
          marginTop: -15,
          marginBottom: -15,
        },
      
        button: {
          backgroundColor: "#00B14D",
          width: "48%",
          alignItems: "center",
          marginTop: 16,
          paddingVertical: 8,
          borderRadius: 8,
          borderWidth: 1,
          marginBottom: 30,
        },
      
        logo: {
          width: 260,
          height: 260,
          marginTop: -80,
        }
    }
);