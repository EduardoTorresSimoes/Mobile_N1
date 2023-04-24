import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Botoes } from "../Botoes";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import ItemContato from "../ItemContato";

export const ContatoDetalhe = (props) => {
  const [nome, setNome] = useState(props.nome);
  const [sobrenome, setSobrenome] = useState(props.sobrenome);
  const [tel, setTel] = useState(props.tel);
  const [email, setEmail] = useState(props.email);
  const [endereco, setEndereco] = useState(props.endereco);
  const [aniversario, setAniversario] = useState(props.aniversario);

  return (
    <SafeAreaView style={{ paddingTop: -100 }}>
      <ScrollView>
        <View style={styles.container}>
            
          <View style={styles.linha}>
            <TextInput value={nome} editable={false}></TextInput>
          </View>

          <View style={styles.linha}>
            <TextInput value={sobrenome} editable={false}></TextInput>
          </View>

          <View style={styles.linha}>
            <TextInput value={tel} editable={false}></TextInput>
          </View>

          <View style={styles.linha}>
            <TextInput value={email} editable={false}></TextInput>
          </View>

          <View style={styles.linha}>
            <TextInput value={endereco} editable={false}></TextInput>
          </View>

          <View style={styles.linha}>
            <TextInput value={aniversario} editable={false}></TextInput>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
