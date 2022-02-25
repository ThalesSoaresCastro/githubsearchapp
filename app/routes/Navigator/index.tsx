import React from 'react';


import { StatusBar } from 'expo-status-bar';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Principal from '../../screens/Principal';
import Secundary from '../../screens/Secundary';

const Tab = createBottomTabNavigator();

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import theme from '../../../theme.json';
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navigator: React.FC = () => {
  return(
    <>
      <StatusBar style="auto" />
      <Tab.Navigator
      initialRouteName="Principal"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: `${theme.colors['color-describe']}`,
        tabBarIconStyle: {
          marginTop: 2,
        },
        tabBarStyle: {
          backgroundColor: `${theme.colors['tab-bar']}`,
        },
      
      }}
      
      >
          <Tab.Screen 
            name="Principal" 
            component={Principal}

            options={{
              tabBarLabel: '',
              title: '',
  
              headerStyle: {
                backgroundColor: 'transparent', //colorBG(themeUser, 0),
                elevation: 0,
              },
              headerTransparent: true,
              tabBarIcon: ({color, size}) => (
                <FontAwesomeIcon icon={faSearch} color={color} size={size} />
              ),
            }}


          />
          <Tab.Screen 
            name="Secundaria"
            component={Secundary}

            options={{
              tabBarLabel: '',
              title: '',
  
              headerStyle: {
                backgroundColor: 'transparent', //colorBG(themeUser, 0),
                elevation: 0,
              },
              headerTransparent: true,
              tabBarIcon: ({color, size}) => (
                <FontAwesomeIcon icon={faHeart} color={color} size={size} />
              ),
            }}
          />
      </Tab.Navigator>
    </>
  );
}


export default Navigator;