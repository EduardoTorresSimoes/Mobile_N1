import { View } from "react-native";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ContatoDetalhe } from "../ContatoDetalhe";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Contato = ({ route }) => {
  const navigation = useNavigation();

  function homePressed() {
    navigation.navigate("Home");
  }

  function editarPressed() {
    navigation.navigate("Editar");
  }

  async function getContatosList() {
    return AsyncStorage.getItem("contatos").then((response) => {
      if (response) return Promise.resolve(JSON.parse(response));
      else return Promise.resolve([]);
    });
  }

  const deletarContato = () => {
    getContatosList().then(async (contatos) => {
      for (let i = 0; i < contatos.length; i++) {
        if (contatos[i].id == route.params.id) {
          contatos.splice(i, 1);
          break;
        }
      }
      console.log(contatos);
      await AsyncStorage.setItem("contatos", JSON.stringify(contatos));

      navigation.navigate("Home");
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={homePressed} style={styles.barraTop}>
          <AntDesign name="arrowleft" size={50} color="white" />
          <Text style={styles.titulo}>Contato</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.foto}>
        <Ionicons name="person-circle" size={130} color="white" />
      </View>

      <ContatoDetalhe
        id={route.params.id}
        nome={route.params.nome}
        sobrenome={route.params.sobrenome}
        tel={route.params.tel}
        endereco={route.params.endereco}
        aniversario={route.params.aniversario}
      ></ContatoDetalhe>

      <View style={styles.botaoManeiro}>
        <View style={styles.botaoBaixo}>
          <SimpleLineIcons name="pencil" size={25} color="black" />
          <TouchableOpacity onPress={editarPressed}>
            <Text style={{ fontSize: 20 }}>Editar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.botaoBaixo}>
          <Ionicons name="md-trash-sharp" size={25} color="black" />
          <TouchableOpacity onPress={deletarContato}>
            <Text style={{ fontSize: 20 }}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
  },
  titulo: {
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 50,
  },
  barraTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  foto: {
    justifyContent: "center",
    alignItems: "center",
  },
  botaoManeiro: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoBaixo: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 100,
    marginLeft: 20,
    marginRight: 20,
  },
});
