import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Botoes } from "../Botoes";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native-web";

export const AdicionarDetalhe = ({ type }) => {
  const [imagem, setImagem] = useState(null);
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

  const imagemChanged = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Você recusou a abrir suas fotos!");
      return;
    }

    const response = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: true,
      quality: 1,
    });

    if (!response.canceled) {
      setImagem(response.assets[0].uri);
    } else {
      alert("Não selecionou foto");
    }
  };

  async function botaoPressed() {
    console.log({
      id: new Date().getTime(),
      imagem,
      nome,
      sobrenome,
      tel,
      email,
      endereco,
      aniversario,
    });

    const contato = {
      id: new Date().getTime(),
      imagem,
      nome,
      sobrenome,
      tel,
      email,
      endereco,
      aniversario,
    };
    let contatos = [];
    const response = await AsyncStorage.getItem("contatos");

    if (response) contatos = JSON.parse(response);

    contatos.push(contato);

    console.log(contatos);

    await AsyncStorage.setItem("contatos", JSON.stringify(contatos));

    navigation.navigate("Home");
  }

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.fotoContainer}>
        <TouchableOpacity onPress={imagemChanged}>
          {imagem ? (
            <Image source={{ uri: imagem }} style={styles.foto} />
          ) : (
            <Ionicons name="person-circle" size={130} color="white" />
          )}
        </TouchableOpacity>
      </View>

      <SafeAreaView style={{ paddingTop: -100 }}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.linha}>
              <TextInput
                style={styles.campos}
                placeholder="Nome:"
                onChangeText={nomeChanged}
              ></TextInput>
            </View>
            <View style={styles.linha}>
              <TextInput
                style={styles.campos}
                placeholder="Sobrenome:"
                onChangeText={sobrenomeChanged}
              ></TextInput>
            </View>
            <View style={styles.linha}>
              <TextInput
                style={styles.campos}
                placeholder="Tel:"
                onChangeText={telChanged}
              ></TextInput>
            </View>
            <View style={styles.linha}>
              <TextInput
                style={styles.campos}
                placeholder="Email:"
                onChangeText={emailChanged}
              ></TextInput>
            </View>
            <View style={styles.linha}>
              <TextInput
                style={styles.campos}
                placeholder="Endereço:"
                onChangeText={enderecoChanged}
              ></TextInput>
            </View>
            <View style={styles.linha}>
              <TextInput
                style={styles.campos}
                placeholder="Data aniversário:"
                onChangeText={aniversarioChanged}
              ></TextInput>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <Botoes onPress={botaoPressed} />
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
  foto: {
    height: 130,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 130/2 
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
  fotoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    
  }
});
