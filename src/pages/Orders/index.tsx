import React, { useEffect, useState } from 'react';
import { Alert, Text } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import Order from '../../dtos/Order';
import api from '../../services/api';
import { OrdersContainer } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
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
    }
  }, [isFocused]);

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', { order });
  };

  return (
    <>
      <Header />
      {loading ? (
        <Text>Carregando pedidos...</Text>
      ) : (
        <OrdersContainer>
          {orders.map(order => {
            return (
              <TouchableOpacity
                key={order.id}
                onPress={() => handleOnPress(order)}
              >
                <OrderCard order={order} />
              </TouchableOpacity>
            );
          })}
        </OrdersContainer>
      )}
    </>
  );
};

export default Orders;
