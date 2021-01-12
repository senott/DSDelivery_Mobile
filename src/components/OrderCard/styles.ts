import styled from 'styled-components/native';

export const OrderCardContainer = styled.View`
  margin: 10% 2% 2% 2%;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 5px #000;
`;

export const OrderCardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const OrderCardName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.24px;
  color: #263238;
  font-family: OpenSans_700Bold;
`;

export const OrderCardPrice = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: right;
  letter-spacing: -0.24px;
  color: #DA5C5C;
  font-family: OpenSans_700Bold;
`;

export const OrderCardText = styled.Text`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.24px;
  color: #9e9e9e;
  font-family: OpenSans_400Regular;
`;

export const OrderCardProductList = styled.View`
  border-top-color: #E6E6E6;
  border-top-width: 1px;
  margin-top: 20px;
  padding-top: 15px;
`;
