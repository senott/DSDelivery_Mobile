import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import { OrdersContainer } from './styles';

const Orders: React.FC = () => {
  return (
    <>
      <Header />
      <OrdersContainer>
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </OrdersContainer>
    </>
  );
};

export default Orders;
