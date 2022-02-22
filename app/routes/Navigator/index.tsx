import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Principal from '../../screens/Principal';
import Secundary from '../../screens/Secundary';

const Tab = createBottomTabNavigator();

const Navigator: React.FC = () => {
  return(
      <Tab.Navigator>
          <Tab.Screen name="Principal" component={Principal} />
          <Tab.Screen name="Secundaria" component={Secundary} />
      </Tab.Navigator>
  );
}


export default Navigator;