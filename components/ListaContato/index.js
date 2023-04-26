import { View } from "react-native";
import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ItemContato from "../ItemContato";

export const ListaContato = () => {
  const [contatos, setContatos] = useState([]);

  async function getContatos() {
    return AsyncStorage.getItem("contatos").then((response) => {
      if (response) return Promise.resolve(JSON.parse(response));
      else return Promise.resolve([]);
    });
  }

  useEffect(() => {
    getContatos().then((contatos) => setContatos(contatos));
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        {contatos.map((contato) => {
          return (
            <ItemContato
              key={contato.id}
              id={contato.id}
              imagem={contato.imagem}
              nome={contato.nome}
              sobrenome={contato.sobrenome}
              tel={contato.tel}
              email={contato.email}
              endereco={contato.endereco}
              aniversario={contato.aniversario}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 30,
    margin: 10,
  },
});
