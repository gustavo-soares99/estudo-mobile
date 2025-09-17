import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const TextoTitulo = styled.Text`
  font-size: 24px;
`;
const TextoPergunta = styled.Text`
  font-size: 18px;
`;
const Resposta = styled.Text`
  font-size: 18px;
  color: ${(props) =>
    props.mostrarResposta
      ? props.respostaCorreta
        ? "#155724"
        : "#721c24"
      : "#343a40"};
`;

class QuestaoStyled extends React.Component {
  render() {
    const { respostaCorreta, mostrarResposta } = this.props;
    return (
      <View>
        <TextoTitulo>Titulo</TextoTitulo>
        <TextoPergunta>Pergunta</TextoPergunta>
        <Resposta
          respostaCorreta={respostaCorreta}
          mostrarResposta={mostrarResposta}
        >
          {mostrarResposta ? "Brasilia" : "Clique para ver a resposta"}
        </Resposta>
      </View>
    );
  }
}

export default QuestaoStyled;
