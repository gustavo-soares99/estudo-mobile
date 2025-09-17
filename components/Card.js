// 7 - Crie um componente de classe Card que recebe um objetco com titulo e descricao como props e renderiza:
// Um componente Text para o título (estilo fixo em negrito).
// Um componente Text para a descrição.

import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Card extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{this.props.cartao.titulo}</Text>
        <Text style={styles.descricao}>{this.props.cartao.descricao}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#f0f0f0ff",
    borderBlockColor: "black",
    borderWidth: 2,
    alignItems: "center",
    height: 80,
    width:200,
    justifyContent: "center"
  },
  texto:{
    fontWeight: "bold",
    fontSize: 24,
  },
  descricao:{
    fontStyle: "italic",
    fontSize: 16
  }
})

export default Card;
