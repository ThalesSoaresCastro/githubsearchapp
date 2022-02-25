import React, { useEffect, useState } from 'react';
import InfoComponent from '../../components/InfoComponent';

import { ButtonSearch, Container, SearchUser } from './styles';

// o icone deve ser do github da lib font-awesome
const githubIcon ='../../images/Octocat.png'; 

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import GithubApi from '../../services/GithubApi';
import MessageComponent from '../../components/MessageComponent';


const Principal: React.FC = () => {
    
    const[userName, SetUserName] = useState('');
    const[error, SetError] = useState(false);
    
    const[message, SetMessage] = useState('');
    const[typeError, SetTypeError] = useState(null);

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
                        
                        const response = await GithubApi.getUser({name:'2eweqdsadsax'});

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

                        console.log('User qtd: ', response)
                    }}
                >
                    <FontAwesomeIcon icon={faSearch} color={"white"} size={20} />
                </ButtonSearch>
            </Container>
        </InfoComponent>
        </>
    );
}

export default Principal;