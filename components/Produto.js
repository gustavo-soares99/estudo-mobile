//  Crie um componente de classe chamado Produto que recebe um objeto produto 
// (com propriedades nome e preco) e exibe:
// "Produto: [nome] - Preço: R$[preco]".

import React from "react";
import { Text, View } from "react-native";

class Produto extends React.Component{
  render(){
    return(
      <View>
        <Text>Produto {this.props.produto.nome} - preço: R${this.props.produto.preco}</Text>
      </View>
    )
  }
};

export default Produto;