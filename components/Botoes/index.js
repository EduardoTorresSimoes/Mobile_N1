import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const Botoes = () => {
  return (
    <View style={styles.botaoBaixo}>
      <TouchableOpacity><AntDesign name="checkcircleo" size={50} color="white" /></TouchableOpacity>
      <TouchableOpacity><AntDesign name="closecircleo" size={50} color="white" /></TouchableOpacity>
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