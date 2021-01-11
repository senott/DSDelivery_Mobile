import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  background-color: #DA5c5c;
  width: 100%;
  height: ${getStatusBarHeight() + 50}px;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 10px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-family: OpenSans_700Bold;
  font-size: 18px;
  line-height: 25px;
  font-weight: bold;
  letter-spacing: -0.24px;
  margin-left: 15px;
  text-transform: uppercase;
`;
