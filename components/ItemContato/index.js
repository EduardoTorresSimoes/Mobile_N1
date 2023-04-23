import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ItemContato(props){

  const navigation = useNavigation();

  function contatoPressed() {
    navigation.navigate('Contato', props);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={contatoPressed}>
        <Text>{props.nome + ' ' + props.sobrenome}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      margin: 5,
      borderBottomColor: "#BBBEBE",
      borderBottomWidth: 1,
    },
  });