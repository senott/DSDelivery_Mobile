import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const HomeContainer = styled.View`
  margin-top: 15%;
  align-items: center;
`;

export const HomeTitle = styled.Text`
  color: #263238;
  font-size: 26px;
  line-height: 35px;
  font-weight: bold;
  margin-top: 31px;
  text-align: center;
`;

export const HomeSubtitle = styled.Text`
  color: #9e9e9e;
  font-size: 16px;
  margin-top: 15px;
  line-height: 22px;
  text-align: center;
`;

export const HomeFooter = styled.View`
  margin-top: 15%;
  align-items: center;
`;

export const HomeButton = styled(RectButton)`
  background-color: #da5c5c;
  flex-direction: row;
  border-radius: 10px;
`;

export const HomeButtonText = styled.Text`
  padding: 15px 50px;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  letter-spacing: -0.24px;
`;
