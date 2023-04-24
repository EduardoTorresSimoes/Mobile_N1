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

export const EditarDetalhe = (props) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [aniversario, setAniversario] = useState("");

  useEffect(() => {
    if (props) {
      setNome(props.nome);
      setSobrenome(props.sobrenome);
      setTel(props.tel);
      setEmail(props.email);
      setEndereco(props.endereco);
      setAniversario(props.aniversario);
    }
  }, []);

  return (
    <>
      <SafeAreaView style={{ paddingTop: -100 }}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.linha}>
              <TextInput value={nome} editable={true}></TextInput>
            </View>

            <View style={styles.linha}>
              <TextInput value={sobrenome} editable={true}></TextInput>
            </View>

            <View style={styles.linha}>
              <TextInput value={tel} editable={true}></TextInput>
            </View>

            <View style={styles.linha}>
              <TextInput value={email} editable={true}></TextInput>
            </View>

            <View style={styles.linha}>
              <TextInput value={endereco} editable={true}></TextInput>
            </View>

            <View style={styles.linha}>
              <TextInput value={aniversario} editable={true}></TextInput>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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