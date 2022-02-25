import React,{memo} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { 
    Container,
    ViewIcon,
} from './styles';

const HeaderComponent: React.FC = () => {
  return(
      <Container>
          <ViewIcon>
            <FontAwesomeIcon 
              icon={faGithub} 
              size={150} 
              color={"white"}
            />
          </ViewIcon>
      </Container>
  );
}

export default memo(HeaderComponent);