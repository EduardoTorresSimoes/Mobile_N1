import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Home } from "./components/Home";
import { Infos } from "./components/AdicionarDetalhe";
import { Adicionar } from "./components/Adicionar";
import { Editar } from "./components/Editar";
import { Contato } from "./components/Contato";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Contato" component={Contato} />
            <Stack.Screen name="Editar" component={Editar} />
            <Stack.Screen name="Adicionar" component={Adicionar} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    width: "100%",
    backgroundColor: "#260831",
  },
});
