import React, { useEffect } from "react";
import { Botoes } from "../Botoes";
import { View } from "react-native";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Infos } from "../Infos";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { InfosPreenchidas } from "../InfosPreenchidas";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { ContatoDetalhe } from "../ContatoDetalhe";

export const Contato = ({ route }) => {
  const navigation = useNavigation();

  function homePressed() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={homePressed} style={styles.barraTop}>
          <AntDesign name="arrowleft" size={50} color="white" />
          <Text style={styles.titulo}>Contato</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.foto}>
        <Ionicons name="person-circle" size={130} color="white" />
      </View>

      <ContatoDetalhe
        id={route.params.id}
        nome={route.params.nome}
        sobrenome={route.params.sobrenome}
        tel={route.params.tel}
        endereco={route.params.endereco}
        aniversario={route.params.aniversario}
      ></ContatoDetalhe>
    </View>
  );
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
  botaoManeiro: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoBaixo: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 100,
    marginLeft: 20,
    marginRight: 20,
  },
});
