import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigator from './app/routes/Navigator';


export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
