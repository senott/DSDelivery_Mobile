import React from 'react';
import {
  OrderCardContainer,
  OrderCardHeader,
  OrderCardName,
  OrderCardPrice,
  OrderCardProductList,
  OrderCardText,
} from './styles';

const OrderCard: React.FC = () => {
  return (
    <OrderCardContainer>
      <OrderCardHeader>
        <OrderCardName>Pedido 1</OrderCardName>
        <OrderCardPrice>R$ 53,70</OrderCardPrice>
      </OrderCardHeader>
      <OrderCardText>Há 35 minutos</OrderCardText>
      <OrderCardProductList>
        <OrderCardText>Pizza Calabresa</OrderCardText>
        <OrderCardText>Pizza Quatro Queijos</OrderCardText>
        <OrderCardText>Pizza da Casa</OrderCardText>
      </OrderCardProductList>
    </OrderCardContainer>
  );
};

export default OrderCard;
