import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import AppRoutes from './src/routes/app.routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
