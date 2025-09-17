//  Crie um componente funcional chamado Titulo que recebe um parâmetro texto e renderiza um <Text> 
// com esse texto. Em seguida, use esse componente dentro de um componente 
// Cabecalho que recebe titulo como parâmetro.

import React from "react";
import { View } from "react-native";
import Titulo from "./Titulo";

class Cabecalho extends React.Component{
  render(){
    return(
      <View>
        <Titulo texto={this.props.titulo}/>
      </View>
    )
  }
}

export default Cabecalho;