import React from 'react';
import { Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { HeaderContainer, HeaderTitle } from './styles';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');
  };

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <HeaderContainer>
        <Image source={logo} />
        <HeaderTitle>DS Delivery</HeaderTitle>
      </HeaderContainer>
    </TouchableWithoutFeedback>
  );
};

export default Header;
