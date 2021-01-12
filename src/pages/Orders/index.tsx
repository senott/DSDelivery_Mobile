import React, { useEffect, useState } from 'react';
import { Alert, TouchableWithoutFeedback, Text } from 'react-native';

import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import Order from '../../dtos/Order';
import api from '../../services/api';
import { OrdersContainer } from './styles';

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getOrders = async () => {
      try {
        const response = await api.get('/orders');

        setOrders(response.data);
      } catch (error) {
        Alert.alert('Houve um erro ao buscar os pedidos.');
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Text>Carregando pedidos...</Text>
      ) : (
        <OrdersContainer>
          {orders.map(order => {
            return (
              <TouchableWithoutFeedback key={order.id}>
                <OrderCard order={order} />
              </TouchableWithoutFeedback>
            );
          })}
        </OrdersContainer>
      )}
    </>
  );
};

export default Orders;
