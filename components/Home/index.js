import React from 'react';
import Header from '../Header';
import { ListaContato } from '../ListaContato';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
        <Header/>
        <ListaContato/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 30,
        backgroundColor: '#260831'
    }
})