import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Orders from '../pages/Orders';
import OrderDetails from '../pages/OrderDetails';

const AppRoutes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#FFF',
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
