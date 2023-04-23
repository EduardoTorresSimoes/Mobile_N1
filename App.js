import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { Home } from './components/Home';
import { Infos } from './components/Infos';
import { Adicionar } from './components/Adicionar';
import { Editar } from './components/Editar';
import { Contato } from './components/Contato';
<<<<<<< Updated upstream
import AppTab from './src/AppTab';
=======
import { Botoes } from './components/Botoes';
>>>>>>> Stashed changes

export default function App() {
  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Adicionar />
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
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
