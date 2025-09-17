// Exercício 3: Lista de Tarefas com Estilização Condicional
// Enunciado: Crie uma lista de tarefas onde cada item:
//  Mostra o texto da tarefa
//  Tem fundo cinza claro se estiver concluída
//  Texto riscado se estiver concluída
//  Borda esquerda colorida (verde para concluída, azul para pendente)

import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const TaskList = styled.View`
  padding: 20px;
`;

const TaskItem = styled.View`
  padding: 10px;
  border-left-width: 4px;
  border-left-color: ${(props) => (props.completed ? "#00ff00" : "#00f")};
  background-color: ${(props) => (props.completed ? "#e0e0e0" : "#f0f0f0")};
`;

const TaskText = styled.Text`
  font-size: 16px;
  text-decoration-line: ${(props) =>
    props.completed ? "line-through" : "none"};
`;

class TaskList2Component extends React.Component {
  render() {
    return (
      <View>
        <TaskList>
          {this.props.tasks.map((task, index) => (
            <TaskItem key={index} completed={task.completed}>
              <TaskText completed={task.completed}>{task.text}</TaskText>
            </TaskItem>
          ))}
        </TaskList>
      </View>
    );
  }
}

export default TaskList2Component;
