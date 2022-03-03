import React from 'react';

import { Container, DescRepo, NameDescContainer, NameRepo } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

import theme from '../../../theme.json';

type TRepo = {
    name:string;
    description?:string;
};

type Props = {
    repo:TRepo;
};

const RepoItemComponent: React.FC<Props> = ({repo}) => {
    return(
        <Container>
            <FontAwesomeIcon icon={faFolder} color={theme.colors['dir-icon-color']} size={40} />

            <NameDescContainer>
                <NameRepo>
                    {repo.name}
                </NameRepo>
                <DescRepo>
                    {repo.description? repo.description: 'Sem descrição.'}
                </DescRepo>
            </NameDescContainer>


        </Container>
    );
}

export default RepoItemComponent;