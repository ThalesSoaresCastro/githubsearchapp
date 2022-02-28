import React, { useContext, useEffect, useState } from 'react';
import InfoComponent from '../../components/InfoComponent';

import { ButtonSearch, Container, SearchUser, ViewList } from './styles';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import GithubApi from '../../services/GithubApi';
import MessageComponent from '../../components/MessageComponent';

import ValidateNet from '../../tools/InfoApp';
import EmptyListComponent from '../../components/EmptyListComponent';
import { FlatList } from 'react-native';
import UserItemComponent from '../../components/UserItemComponent';
import { TextListView } from '../../components/UserItemComponent/styles';
import UserContext from '../../contexts/UserContext';


type TUser = {
    id: number;
    login: string;
    avatar_url: string;
    repos_url: string;
};


type ItemList = {

}


const Principal: React.FC = () => {
    
    const[userName, SetUserName] = useState('');
    const[error, SetError] = useState(false);
    
    const[message, SetMessage] = useState('');
    const[typeError, SetTypeError] = useState(null);


    const[listUser, SetListUser] = useState<Array<TUser> | []>([]);


    const {user} = useContext(UserContext);


    useEffect(()=>{
        async function setMessage(): Promise<void> {
            if(error){
                setTimeout(() => {
                    SetError(!error);
                }, 3000);
           }
        }
        setMessage();
    },[error]);

    return(
        <>
        {error && <MessageComponent message={message} type={typeError} />}

        <InfoComponent>
            <Container>
                <SearchUser 
                    value={userName}
                    onChangeText={text => SetUserName(text)}
                />
                <ButtonSearch
                    onPress={async()=>{
                        

                        
                        /*Valida se usuário tem internet*/
                        if(!ValidateNet()){
                            SetError(!error);
                            SetMessage('Aparelho desconectado da internet!');
                            SetTypeError(false);
                            return;
                        }
                        

                        if(!userName.trim()){
                            SetError(!error);
                            SetMessage('Nome inválido.');
                            SetTypeError(false);
                            return;                      
                        }


                        const response = await GithubApi.getUser({name:userName});

                        if(response.status){
                            SetError(!error);
                            SetMessage('Ocorreu um erro!');
                            SetTypeError(false);
                            return;
                        }
                        if(response.total_count === 0 ){
                            SetError(!error);
                            SetMessage('Usuário não encontrado!');
                            SetTypeError(false);
                            return;
                        }

                        SetListUser(response.items);


                    }}
                >
                    <FontAwesomeIcon icon={faSearch} color={"white"} size={20} />
                </ButtonSearch>
            </Container>
            
            {/*componente para visualizar a lista de contatos*/}
            
            <ViewList>


                    {listUser.length === 0? 
                        <EmptyListComponent message={'Está meio vazio por aqui!\nBusque por um usuário.'} />
                    :
                    <>
                            <TextListView>
                                Usuários encontrados
                            </TextListView>
                            <FlatList 
                                data={listUser}
                                renderItem={({item, index})=>{
                                    return <UserItemComponent 
                                            user={{
                                                    login: item.login,
                                                    id: item.id,
                                                    avatar_url: item.avatar_url,
                                                    repos_url: item.repos_url
                                                }}
                                            />
                                }}
                            />
                    </>                  
                    }
            </ViewList>
        </InfoComponent>
        </>
    );
}

export default Principal;