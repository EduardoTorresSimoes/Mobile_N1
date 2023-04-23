import {StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {Feather} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header(){

  const navigation = useNavigation();

  function adicionarPressed() {
    navigation.navigate('Adicionar');
  }

    return (
        <View style={styles.container}>
            <Text style={styles.contatos}>Contatos</Text>
            <View style={styles.blocoPesquisa}>
                <View style={styles.listaPesquisar}>
                    <TouchableOpacity>
                        <Entypo name="magnifying-glass" size={30} color="#BBBEBE" />
                        <TextInput style={styles.pesquisar} placeholder="Pesquisar"></TextInput>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={adicionarPressed}>
                    <AntDesign name="pluscircleo" size={50} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#260831',
        padding: 10,
    },
    listaPesquisar: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        gap: 10
    },
    blocoPesquisa: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contatos: {
        paddingHorizontal: 10,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 40
    },
    pesquisar: {
        color: '#7b7d7d',
        fontSize: 20
    },
    corpoListaCtt: {
        backgroundColor: 'white',
    }
    
})