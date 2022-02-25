import React from 'react';
import { Text, View } from 'react-native';
import InfoComponent from '../../components/InfoComponent';

// import { Container } from './styles';

const Secundary: React.FC = () => {
  return(
    <InfoComponent>
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
    </InfoComponent>
  );
}

export default Secundary;