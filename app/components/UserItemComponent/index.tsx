import React, { memo, useContext } from 'react';

import {
    Container,
    ContainerButton,
    ImageContainer, 
    ImageUser, 
    NameUser,
    TouchButton,
} from './styles';


import { useNavigation } from '@react-navigation/native';

import theme from '../../../theme.json';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
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

type Nav = {
    navigate: (value: string) => void;
  }

const UserItemComponent: React.FC<Props> = ({user,removeItem}) => {

    
    const navigation = useNavigation<Nav>();

    const {SetUser, RemoveUser} = useContext(UserContext);

    return(
    <Container
    >
        <ImageContainer>
            <ImageUser source={{uri:user.avatar_url}} />
            <NameUser>
                {user.login}
            </NameUser>
        </ImageContainer>
        
        { removeItem?
            <ContainerButton>            
                <TouchButton
                    onPress={ async()=>{
                        await RemoveUser(user);
                    }}
                >
                    <FontAwesomeIcon 
                        icon={faTrash} 
                        color={'red'} 
                        size={25}      
                    />
                </TouchButton>
                <TouchButton
                    onPress={()=>{
                        SetUser(user);
                        return navigation.navigate("RepoListScreen");
                    }}
                >
                    <FontAwesomeIcon 
                        icon={faEye} 
                        color={'green'} 
                        size={25}      
                    />
                </TouchButton>

            </ContainerButton>
            :
            <TouchButton
            onPress={()=>{
                SetUser(user);
                navigation.navigate("RepoListScreen");
            }}
            >
                <FontAwesomeIcon 
                    icon={faAngleRight} 
                    color={theme.colors['color-describe']} 
                    size={15} 
                />
            </TouchButton>

        }
    </Container>
  );
}

export default memo(UserItemComponent);