import React, { useContext } from 'react';

import {
    Container,
    ContainerButton,
    ImageContainer, 
    ImageUser, 
    NameUser 
} from './styles';


import { useNavigation } from '@react-navigation/native';

import theme from '../../../theme.json';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../../contexts/UserContext';

type TUser = {
    id: number;
    login: string;
    avatar_url: string;
    repos_url: string;
};

type Props = {
    user: TUser;
    removeItem?:boolean;
};


const UserItemComponent: React.FC<Props> = ({user,removeItem}) => {

    
    const navigation = useNavigation();

    const {SetUser, RemoveUser} = useContext(UserContext);

    return(
    <Container
        onPress={()=>{
            SetUser(user);
            navigation.navigate("RepoListScreen");
        }}
    >
        <ImageContainer>
            <ImageUser source={{uri:user.avatar_url}} />
            <NameUser>
                {user.login}
            </NameUser>
        </ImageContainer>
        
        { removeItem?
            <ContainerButton
                onPress={ async()=>{
                    await RemoveUser(user);
                }}
            >
                <FontAwesomeIcon 
                icon={faTrash} 
                color={'red'} 
                size={25}      
            />
            </ContainerButton>:
            <FontAwesomeIcon 
                icon={faAngleRight} 
                color={theme.colors['color-describe']} 
                size={15} 
            />
        }
    </Container>
  );
}

export default UserItemComponent;