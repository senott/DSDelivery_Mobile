import React from 'react';

import Order from '../../dtos/Order';
import dateFromNow from '../../utils/dateFromNow';
import formatPrice from '../../utils/formatPrice';
import {
  OrderCardContainer,
  OrderCardHeader,
  OrderCardName,
  OrderCardPrice,
  OrderCardProductList,
  OrderCardText,
} from './styles';

interface orderCardProps {
  order: Order;
}

const OrderCard: React.FC<orderCardProps> = ({ order }) => {
  return (
    <OrderCardContainer>
      <OrderCardHeader>
        <OrderCardName>{`Pedido ${order.id}`}</OrderCardName>
        <OrderCardPrice>{formatPrice(order.total)}</OrderCardPrice>
      </OrderCardHeader>
      <OrderCardText>{dateFromNow(order.moment)}</OrderCardText>
      <OrderCardProductList>
        {order.products.map(product => {
          return <OrderCardText key={product.id}>{product.name}</OrderCardText>;
        })}
      </OrderCardProductList>
    </OrderCardContainer>
  );
};

export default OrderCard;
