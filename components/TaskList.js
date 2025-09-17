// Exercício 3: Lista de Tarefas com Estilização Condicional
// Enunciado: Crie uma lista de tarefas onde cada item:
//  Mostra o texto da tarefa
//  Tem fundo cinza claro se estiver concluída
//  Texto riscado se estiver concluída
//  Borda esquerda colorida (verde para concluída, azul para pendente)

import { View } from "react-native";
import styled from "styled-components/native";

const TaskList = styled.View`
  padding: 20px;
`;

const TaskItem = styled.View`
  background-color: ${(props) => (props.completed ? "#f8f9fa" : "#ffffff")};
  border-left-width: 4px;
  border-left-color: ${(props) => (props.completed ? "#28a745" : "#007bff")};
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const TaskText = styled.Text`
  font-size: 16px;
  text-decoration-line: ${(props) =>
    props.completed ? "line-through" : "none"};
`;

const TaskListComponent = ({ tasks }) => {
  return (
    <View>
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem key={index} completed={task.completed}>
            <TaskText completed={task.completed}>{task.task}</TaskText>
          </TaskItem>
        ))}
      </TaskList>
    </View>
  );
};

export default TaskListComponent;
