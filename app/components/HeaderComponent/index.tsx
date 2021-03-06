import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { 
    Container,
    ViewIcon,
} from './styles';

import theme from '../../../theme.json';

const HeaderComponent: React.FC = () => {
  return(
      <Container>
          <ViewIcon>
            <FontAwesomeIcon 
              icon={faGithub} 
              size={150} 
              color={theme.colors['color-describe']}
            />
          </ViewIcon>
      </Container>
  );
}

export default HeaderComponent;