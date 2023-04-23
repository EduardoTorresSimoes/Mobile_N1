import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Botoes = ({onPress}) => {

  return (
    <View style={styles.botaoBaixo}>
      <TouchableOpacity onPress={onPress}><AntDesign name="checkcircleo" size={50} color="white" /></TouchableOpacity>
      <TouchableOpacity onPress={onPress}><AntDesign name="closecircleo" size={50} color="white" /></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    botaoBaixo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 100
    }
})