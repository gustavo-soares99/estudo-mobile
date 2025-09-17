//  Crie um componente de classe chamado Calculadora que recebe dois parâmetros 
// (numero1 e numero2) e exibe a soma deles no formato:
// "A soma de [numero1] + [numero2] é igual a [resultado].".
import React from "react"
import { Text, View } from "react-native"

const Calculadora = (props) => {
  return(
    <View>
      <Text>A soma de {props.numero1} + {props.numero2} é igual a {props.numero1 + props.numero2}</Text>
    </View>
  )
}

export default Calculadora;