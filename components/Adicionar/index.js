import React from 'react';
import { Botoes } from '../Botoes';
import { View } from 'react-native';
import { TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Infos } from '../Infos';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const Adicionar = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.barraTop}>
          <AntDesign name="arrowleft" size={50} color="white" />
          <Text style={styles.titulo}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.foto}>
        <Ionicons name="person-circle" size={130} color="white" />
      </View>
      
      <Infos/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 5,
    },
    titulo: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 50
    },
    barraTop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    foto: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    botaoBaixo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 100
    }
})