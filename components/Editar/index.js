import React from "react";
import { Botoes } from "../Botoes";
import { View } from "react-native";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Infos } from "../Infos";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Editar = () => {
  const navigation = useNavigation();

  function contatoPressed() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.barraTop} onPress={contatoPressed}>
          <AntDesign name="arrowleft" size={50} color="white" />
          <Text style={styles.titulo}>Editar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.foto}>
        <Ionicons name="person-circle" size={130} color="white" />
      </View>

      <Infos></Infos>
    </View>
  );
};

Editar.navigationOptions = {
  title: "Editar",
  headerStyle: {
    color: "blue",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
  },
  titulo: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 50,
  },
  barraTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  foto: {
    justifyContent: "center",
    alignItems: "center",
  },
  botaoBaixo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100,
  },
});
