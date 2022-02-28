import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RepoListScreen from '../../screens/RepoListScreen';
import Navigator from '../Navigator';
const Stack  = createStackNavigator();

const StackNavigator: React.FC = () => {
  
  return(
    <Stack.Navigator 
      initialRouteName="Navigator"
    >
        <Stack.Screen 
          name="Navigator" 
          component={Navigator}  
          options={{headerShown:false}} 
        />
        <Stack.Screen 
          name="RepoListScreen" 
          component={RepoListScreen}  
          options={{headerShown:false}}
        />
    </Stack.Navigator>
  );
}

export default StackNavigator;