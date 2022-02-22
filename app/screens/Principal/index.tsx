import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

const Principal: React.FC = () => {
  return(
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
  );
}

export default Principal;