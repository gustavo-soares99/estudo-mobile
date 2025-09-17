import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Titulo from "./components/Titulo";
import Produto from "./components/Produto";
import Card from "./components/Card";
import Usuario from "./components/Usuario";
import Calculadora from "./components/Calculadora";
import ProgressBarComponent from "./components/ProgressBar";
import TaskListComponent from "./components/TaskList";
import TaskList2Component from "./components/TaskList2";
import CartaoPerfilComponent from "./components/Perfil";
import QuestaoStyled from "./components/QuestaoStyled";
import QuestaoNormal from "./components/QuestaoNormal";

export default function App() {
  const tasks = [
    { text: "estudar React", completed: true },
    { text: "estudar React", completed: false },
    { text: "estudar React", completed: true },
    { text: "estudar React", completed: false },
  ];

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Titulo texto="Texto parâmetro" />
      <Produto produto={{ nome: "caro", preco: "2000" }} />
      <Card
        cartao={{ titulo: "texto do cartao", descricao: "descricao do cartao" }}
      />
      <Usuario nome="Gustavo" idade={26} cidade="Indaiatuba " />
      <Calculadora numero1={6} numero2={10} />
      <ProgressBarComponent progress={75} />
      <TaskList2Component tasks={tasks} />
      <CartaoPerfilComponent
        user={{ nome: "nome", email: "email", status: "Offline" }}
      />
      <QuestaoStyled mostrarResposta={false} respostaCorreta={false} />
      <QuestaoNormal />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
