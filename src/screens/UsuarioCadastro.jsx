import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { app } from "../config/firebase";
import styles from "../config/styles";

export default function UsuarioCadastro() {
  const [nome, setNome] = useState("");

  async function handleRegister() {
    const db = getFirestore(app);

    const docRef = await addDoc(
      collection(db, "usuarios"),

      {
        nome: nome,
        email: "gabrielsouzafelipe12@gmail.com",
      }
    ).then((docRef) => {
      console.log("Id do usuário: ", docRef.id);
    });
  }

  return (
    <View style={styles.container}>
      <Text>Cadastro do Usuário</Text>
      <TextInput
        label="Nome"
        mode="outlined"
        value={nome}
        onChangeText={setNome}
      />
      <Button mode="contained" onPress={handleRegister}>
        Cadastrar Usuário{" "}
      </Button>
    </View>
  );
}
