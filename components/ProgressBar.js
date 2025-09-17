// Exercício 4: Barra de Progresso com Estilização Dinâmica
// Enunciado: Crie uma barra de progresso que:
//  Mostre o progresso atual (0-100%)
//  Mude de cor conforme o progresso (vermelho &lt; 30%, amarelo 30-70%,
// verde &gt; 70%)

//  Mostre o valor percentual numericamente

import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const ProgressBarBG = styled.View`
  width: 300px;
  height: 30px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const ProgressBar = styled.View`
  width: ${(props) => props.progress}%;
  height: 100%;
  background-color:${(props) => props.progress < 30 ? "#FF0000" : props.progress > 70 ? "#00ff00" : "#ffff00"};
  border-radius: 4px;
`;

const ProgressBarComponent = (props) => {
  return(
    <View>
      <ProgressBarBG>
        <ProgressBar progress={props.progress}/>
      </ProgressBarBG>
      <Text>{props.progress}</Text>
    </View>
  )
}

export default ProgressBarComponent;