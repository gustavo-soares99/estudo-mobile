// Crie um componente funcional chamado Usuario que recebe nome, 
// idade e cidade como parâmetros e exibe:
// "[nome] tem [idade] anos e mora em [cidade].".

import React from "react";
import { Text, View } from "react-native";

const Usuario = (props) => {
  return(
    <View>
      <Text>{props.nome} tem {props.idade} anos e mora em {props.cidade}
      </Text>
    </View>
  )
}

export default Usuario;