import React from 'react';
import { Image } from 'react-native';

import { HeaderContainer, HeaderTitle } from './styles';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Image source={logo} />
      <HeaderTitle>DS Delivery</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
