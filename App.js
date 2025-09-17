import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from './components/Titulo';
import Produto from './components/Produto';
import Card from './components/Card';
import Usuario from './components/Usuario';
import Calculadora from './components/Calculadora';
import ProgressBarComponent from './components/ProgressBar';
import TaskListComponent from './components/TaskList';




export default function App() {

  const tasks = [{task: "estudar React", completed: true},
    {task: "tarefa 2", completed: false},
    {task: "tarefa 3", completed: true},
    {task: "tarefa 4", completed: false},
    {task: "tarefa 5", completed: true}
  ]

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Titulo texto="Texto parâmetro"/>
      <Produto produto={{nome: "caro", preco: "2000"}}/>
      <Card cartao={{titulo: "texto do cartao", descricao: "descricao do cartao"}}/>
      <Usuario nome="Gustavo" idade={26} cidade="Indaiatuba "/>
      <Calculadora numero1={6} numero2={10} />
      <ProgressBarComponent progress={75}/>
      <TaskListComponent tasks={tasks}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
