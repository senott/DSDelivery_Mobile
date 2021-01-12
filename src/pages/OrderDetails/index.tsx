import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Linking } from 'react-native';

import Header from '../../components/Header';
import OrderCard from '../../components/OrderCard';
import Order from '../../dtos/Order';
import api from '../../services/api';
import {
  OrderContainer,
  OrderDetailsButton,
  OrderDetailsButtonText,
} from './styles';

interface OrderDetailsProps {
  route: {
    params: {
      order: Order;
    };
  };
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ route }) => {
  const { order } = route.params;
  const navigation = useNavigation();

  const handleOnCancel = () => {
    navigation.navigate('Orders');
  };

  const handleConfirmDelivery = async () => {
    try {
      await api.put(`/orders/${order.id}/delivered`);
      Alert.alert('Pedido sinalizado como entregue!');
      navigation.navigate('Orders');
    } catch (error) {
      Alert.alert('Ocorreu um problema ao definir pedido como entregue.');
    }
  };

  const handleNavigation = () => {
    const url = `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`;
    Linking.openURL(url);
  };

  return (
    <>
      <Header />
      <OrderContainer>
        <OrderCard order={order} />
        <OrderDetailsButton onPress={handleNavigation}>
          <OrderDetailsButtonText>INICIAR NAVEGAÇÃO</OrderDetailsButtonText>
        </OrderDetailsButton>
        <OrderDetailsButton onPress={handleConfirmDelivery}>
          <OrderDetailsButtonText>CONFIRMAR ENTREGA</OrderDetailsButtonText>
        </OrderDetailsButton>
        <OrderDetailsButton onPress={handleOnCancel}>
          <OrderDetailsButtonText>CANCELAR</OrderDetailsButtonText>
        </OrderDetailsButton>
      </OrderContainer>
    </>
  );
};

export default OrderDetails;
