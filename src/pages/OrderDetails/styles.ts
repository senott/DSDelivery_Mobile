import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const OrderContainer = styled.View`
  padding: 0 5%;
`;

export const OrderDetailsButton = styled(RectButton)`
  background-color: #DA5C5C;
  flex-direction: row;
  border-radius: 10px;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

export const OrderDetailsButtonText = styled.Text`
  padding: 15px 50px;
  font-weight: bold;
  font-size: 18px;
  color: #FFF;
  letter-spacing: -0.24px;
  font-family: OpenSans_700Bold;
`;

