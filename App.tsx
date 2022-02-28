import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { UserProvider } from './app/contexts/UserContext';
import Navigator from './app/routes/Navigator';
import StackNavigator from './app/routes/StackNavigator';


export default function App() {
  return (
      <UserProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </UserProvider>
  );
}
