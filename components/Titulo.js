//  Crie um componente funcional chamado Titulo que recebe um parâmetro texto e renderiza um <Text> 
// com esse texto. Em seguida, use esse componente dentro de um componente 
// Cabecalho que recebe titulo como parâmetro.

import { Text, View } from "react-native";

const Titulo = (props) => {
  return(
    <View>
      <Text>{props.texto}</Text>
    </View>
  )
};

export default Titulo;