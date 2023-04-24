import React from "react";
import { View } from "react-native";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { EditarDetalhe } from "../EditarDetalhe";
import { Botoes } from "../Botoes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Editar = ({ route }) => {
  const contatoEditado = {id, nome, sobrenome, tel, email, endereco, aniversario};

  const navigation = useNavigation();

  function contatoPressed() {
    navigation.navigate("Home");
  }

  async function getContatosList() {
    return AsyncStorage.getItem("contatos").then((response) => {
      if (response) return Promise.resolve(JSON.parse(response));
      else return Promise.resolve([]);
    });
  }

  const EditarContato = () => {
    getContatosList().then(async (contatos) => {
      for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].id == route.params.id) {
          contatos[i] = contatoEditado;
          break;
        }
      }
      console.log(contatos);
      await AsyncStorage.setItem("contatos", JSON.stringify(contatos));

      navigation.navigate("Home");
    });
  };

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

      <EditarDetalhe
        id={route.params.id}
        nome={route.params.nome}
        sobrenome={route.params.sobrenome}
        tel={route.params.tel}
        endereco={route.params.endereco}
        aniversario={route.params.aniversario}
      ></EditarDetalhe>

      <Botoes onPress={EditarContato} />
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
