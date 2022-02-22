import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './app/routes/Navigator';


export default function App() {
  return (
  <>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  </>
  );
}
