import { ScrollView, Text, TextInput, View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from "react";
import { Botoes } from "../Botoes";

export const Infos = ({ type }) => {
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

  async function botaoPressed(){
    console.log({id: new Date().getTime(), nome, sobrenome, tel, email, endereco, aniversario})

    const contato = {id: new Date().getTime(), nome, sobrenome, tel, email, endereco, aniversario}
    let contatos = [];
    const response = await AsyncStorage.getItem('contatos');

    if (response) contatos = JSON.parse(response);

    contatos.push(contato); 

    console.log(contatos);

    await AsyncStorage.setItem('contatos', JSON.stringify(contatos));

  }

<<<<<<< Updated upstream
export const Infos = () => {

    const [Nome, setNome] = useState('');
    const [Sobrenome, setSobrenome] = useState('');
    const [Tel, setTel] = useState('');
    const [Email, setEmail] = useState('');
    const [Endereco, setEndereco] = useState('');
    const [DataAniversario, setDataAniversario] = useState('');

    function nomeChanged(Nome) {
        setNome(Nome);
    }

    function sobrenomeChanged(Sobrenome){
        setSobrenome(Sobrenome);
    }

    function telChanged(Tel){
        setTel(Tel);
    }

    function emailChanged(Email){
        setEmail(Email);
    }

    function enderecoChanged(Endereco){
        setEndereco(Endereco);
    }

    function aniversarioChanged(DataAniversario){
        setDataAniversario(DataAniversario);
    }

    

    function botaoPressed(){
        console.log({id: new Date().getTime() })
    }


=======
>>>>>>> Stashed changes
  return (
    <>
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

      {type == "botao" ? (
        <View style={styles.botaoManeiro}>
          <View style={styles.botaoBaixo}>
            <SimpleLineIcons name="pencil" size={25} color="black" />
            <TouchableOpacity>
              <Text style={{ fontSize: 20 }}>Editar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.botaoBaixo}>
            <Ionicons name="md-trash-sharp" size={25} color="black" />
            <TouchableOpacity>
              <Text style={{ fontSize: 20 }}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Botoes onPress={botaoPressed} />
      )}
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  botaoBaixo: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 30,
      paddingVertical: 15,
      paddingHorizontal: 15,
      alignItems: 'center',
      marginBottom: 100,
      marginLeft: 20,
      marginRight: 20,
  }
});
