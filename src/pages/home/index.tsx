import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  HomeButton,
  HomeButtonText,
  HomeContainer,
  HomeFooter,
  HomeSubtitle,
  HomeTitle,
} from './styles';
import delivery from '../../assets/images/deliveryman.png';
import Header from '../../components/Header';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate('Orders');
  };

  return (
    <>
      <Header />
      <HomeContainer>
        <Image source={delivery} />
        <HomeTitle>
          Acompanhe os pedidos e{'\n'}
          entregue no prazo!
        </HomeTitle>
        <HomeSubtitle>
          Receba todos os pedidos do seu{'\n'}
          restaurante na palma da sua mão
        </HomeSubtitle>
      </HomeContainer>
      <HomeFooter>
        <HomeButton onPress={handleOnPress}>
          <HomeButtonText>VER PEDIDOS</HomeButtonText>
        </HomeButton>
      </HomeFooter>
    </>
  );
};

export default Home;
