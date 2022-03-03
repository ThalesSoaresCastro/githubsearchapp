import React from 'react';
import HeaderComponent from '../HeaderComponent';

import { Container, ViewInfo } from './styles';

type Props = {
    children?: React.ReactNode;
};

const InfoComponent: React.FC<Props> = ({children}) => {
  return(
    <Container>
        <HeaderComponent />
        <ViewInfo>
            {children}
        </ViewInfo>
    </Container>
  );
}

export default InfoComponent;