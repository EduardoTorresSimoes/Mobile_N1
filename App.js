import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { Home } from './components/Home';
import { Infos } from './components/Infos';
import { Adicionar } from './components/Adicionar';
import { Editar } from './components/Editar';
import { Deletar } from './components/Deletar';
import { Contato } from './components/Contato';
import AppTab from './src/AppTab';

export default function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Adicionar />
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    width: "100%",
    backgroundColor: "#260831"
  },
});
