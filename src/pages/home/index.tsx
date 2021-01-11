import React from 'react';
import { Image } from 'react-native';

import {
  HomeButton,
  HomeButtonText,
  HomeContainer,
  HomeFooter,
  HomeSubtitle,
  HomeTitle,
} from './styles';
import delivery from '../../assets/images/deliveryman.png';

const Home: React.FC = () => {
  const handleOnPress = () => {};

  return (
    <>
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
