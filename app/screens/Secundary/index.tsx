import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

const Secundary: React.FC = () => {
  return(
      <View
        style={{
            flex:1,
            alignContent: 'center',
            justifyContent:'center',
        }}
      >
          <Text>
              Secundaria
          </Text>
      </View>
  );
}

export default Secundary;