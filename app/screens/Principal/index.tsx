import React from 'react';
import { Text, View } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';

// import { Container } from './styles';

const Principal: React.FC = () => {
  return(
    <HeaderComponent>
        <View
            style={{
                flex:1,
                alignContent: 'center',
                justifyContent:'center',
            }}
        >
            <Text>
                Principal
            </Text>
        </View>
    </HeaderComponent>
  );
}

export default Principal;