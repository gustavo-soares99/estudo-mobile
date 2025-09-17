// Enunciado: Crie um componente de cartão de perfil que mostra:
//  Nome do usuário
//  Email
//  Status (online/offline) com cor condicional (verde para online, cinza para
// offline)
//  Use renderização condicional para mostrar o status

import { Text, View } from "react-native";
import styled from "styled-components/native";

const CartaoBG = styled.View`
  background-color: #f0f0f0;
  width: 100;
  height: 80;
`;

const UserText = styled.Text`
  font-size: 16px;
`;

const UserStatus = styled.View`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  background-color: ${(props) => (props.online ? "#0f0" : "#f00")};
`;

const UserStatusText = styled.Text`
  font-size: 16px;
  color: ${(props) => (props.online ? "#0f0" : "#a0a0a0")};
`;

const CartaoPerfilComponent = ({ user }) => {
  const isOnline = user.status === "Online";
  return (
    <View>
      <CartaoBG>
        <UserText>
          {user.nome} + {user.email}
        </UserText>
        <UserStatus online={isOnline} />
        <UserStatusText online={isOnline}>
          {isOnline ? "Online" : "Offline"}
        </UserStatusText>
      </CartaoBG>
    </View>
  );
};

export default CartaoPerfilComponent;
