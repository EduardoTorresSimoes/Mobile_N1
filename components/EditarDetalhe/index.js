import {
  ScrollView,
  TextInput,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import {  SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Botoes } from "../Botoes";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export const EditarDetalhe = (props) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [aniversario, setAniversario] = useState("");

  function nomeChanged(nome) {
    setNome(nome);
  }
  function sobrenomeChanged(sobrenome) {
    setSobrenome(sobrenome);
  }
  function telChanged(tel) {
    setTel(tel);
  }
  function emailChanged(email) {
    setEmail(email);
  }
  function enderecoChanged(endereco) {
    setEndereco(endereco);
  }
  function aniversarioChanged(aniversario) {
    setAniversario(aniversario);
  }

 const navigation = useNavigation();

  async function getContatosList() {
    return AsyncStorage.getItem("contatos").then((response) => {
      if (response) return Promise.resolve(JSON.parse(response));
      else return Promise.resolve([]);
    });
  }

  const EditarContato = () => {
    const contatoEditado = {id: props.id, nome, sobrenome, tel, email, endereco, aniversario};

    getContatosList().then(async (contatos) => {
      for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].id == props.id) {
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
    <>
      <SafeAreaView style={{ paddingTop: -100 }}>
        <ScrollView>
          <View style={styles.foto}>
            <Ionicons name="person-circle" size={130} color="white" />
          </View>
          <View style={styles.container}>
            <View style={styles.linha}>
              <TextInput value={nome} onChangeText={nomeChanged}></TextInput>
            </View>

            <View style={styles.linha}>
              <TextInput value={sobrenome} onChangeText={sobrenomeChanged}></TextInput>
            </View>

            <View style={styles.linha}>
              <TextInput value={tel} onChangeText={telChanged}></TextInput>
            </View>

            <View style={styles.linha}>
              <TextInput style={email} onChangeText={emailChanged}></TextInput>
            </View>

            <View style={styles.linha}>
              <TextInput value={endereco} onChangeText={enderecoChanged}></TextInput>
            </View>

            <View style={styles.linha}>
              <TextInput value={aniversario} onChangeText={aniversarioChanged}></TextInput>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Botoes onPress={EditarContato} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 25,
    margin: 1,
  },
  foto: {
    justifyContent: "center",
    alignItems: "center",
  },
  campos: {
    color: "#7b7d7d",
    marginLeft: 5,
    marginTop: 5,
  },
  linha: {
    marginTop: 1,
    borderBottomColor: "#BBBEBE",
    borderBottomWidth: 1,
    width: "97%",
    marginLeft: 5,
    marginBottom: 12,
    marginRight: 5,
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
