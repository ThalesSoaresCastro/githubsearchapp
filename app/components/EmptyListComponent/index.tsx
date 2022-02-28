import React from 'react';
import { View } from 'react-native';

import { Container, ImageGithub, TextEmpty } from './styles';

// o icone deve ser do github da lib font-awesome
const githubIcon ='../../images/Octocat.png'; 

type Props = {
    message: string;
};

const EmptyListComponent: React.FC<Props> = ({message}) => {
  return(
      <Container>
            <ImageGithub source={require(githubIcon)} />
            <TextEmpty>
                {message}
            </TextEmpty>
      </Container>
  );
}

export default EmptyListComponent;