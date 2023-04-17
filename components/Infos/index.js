import { ScrollView, Text, TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import React from 'react'

export const Infos = () => {
  return (
    <SafeAreaView style={{paddingTop: -100}}>
        <ScrollView>
            <View style={styles.container}> 
                <View style={styles.linha}><TextInput style={styles.campos} placeholder="Nome:"></TextInput></View>
                <View style={styles.linha}><TextInput style={styles.campos} placeholder="Sobrenome:"></TextInput></View>
                <View style={styles.linha}><TextInput style={styles.campos} placeholder="Tel:"></TextInput></View>
                <View style={styles.linha}><TextInput style={styles.campos} placeholder="Email:"></TextInput></View>
                <View style={styles.linha}><TextInput style={styles.campos} placeholder="Endereço:"></TextInput></View>
                <View style={styles.linha}><TextInput style={styles.campos} placeholder="Data aniversário:"></TextInput></View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 25,
        margin: 1
    },
    campos: {
        color: '#7b7d7d',
        marginLeft: 5,
        marginTop: 5
    },
    linha: {    
        marginTop: 1,
        borderBottomColor: '#BBBEBE',
        borderBottomWidth: 1,
        width: '97%',
        marginLeft: 5,
        marginBottom: 12,
        marginRight: 5
    }
})