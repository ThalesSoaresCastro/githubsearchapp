import React from 'react';
import { View } from 'react-native';

import { 
    Container,
    ViewIcon,
    ImageIcon,
} from './styles';

type Props = {
    children: React.ReactNode;
}

// o icone deve ser do github da lib font-awesome
const githubIcon ='../../images/Octocat.png'; 

const HeaderComponent: React.FC<Props> = ({children}) => {
  return(
      <Container>
          <ViewIcon>
            <ImageIcon source={require(githubIcon)} />
          </ViewIcon>
          {children}
      </Container>
  );
}

export default HeaderComponent;