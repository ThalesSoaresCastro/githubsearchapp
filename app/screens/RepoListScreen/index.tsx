import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import InfoComponent from '../../components/InfoComponent';
import UserContext from '../../contexts/UserContext';
import { UserContainer, TextMessage, BackgroundHeart, ViewList } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import GithubApi from '../../services/GithubApi';
import EmptyListComponent from '../../components/EmptyListComponent';
import RepoItemComponent from '../../components/RepoItemComponent';

import MessageComponent from '../../components/MessageComponent';

const RepoListScreen: React.FC = () => {

  const [repoListUser, SetRepoListUser] = useState([]);
  const{user, AddUser} = useContext(UserContext);


  const[error, SetError] = useState(false);
  const[message, SetMessage] = useState('');
  const[typeError, SetTypeError] = useState(null);

  useEffect(()=>{
      async function SetRepo() {
        const response = await GithubApi.getRepos({repo:user.repos_url});
        if(response.status){
          return SetError(true);
        }
        SetRepoListUser(response);
      }
      SetRepo();
  },[]);


  useEffect(()=>{
      async function setMessage(): Promise<void> {
          if(error){
              setTimeout(() => {
                  SetError(!error);
              }, 2000);
        }
      }
      setMessage();
  },[error]);

  return(
    <>
      {error && <MessageComponent message={message} type={typeError} />}
      <InfoComponent>
          <UserContainer>
            <TextMessage>
              Favoritar {user.login} ?
            </TextMessage>
            <BackgroundHeart
              onPress={async()=>{

                if(await AddUser(user)){
                  SetError(!error);
                  SetMessage('Usuário adicionado!');
                  SetTypeError(true);
                }
                else{                  
                  SetError(!error);
                  SetMessage('Usuário já existe!');
                  SetTypeError(false);
                }
                
              }}
            >  
              <FontAwesomeIcon 
                icon={faHeart} 
                color={"red"} 
                size={25}
              />
            </BackgroundHeart>
          </UserContainer>

          <ViewList>
            {
              repoListUser.length===0?
                <EmptyListComponent message={'Não existem repositórios cadastrados.'}/>
              :
                <FlatList 
                  data={repoListUser}
                  renderItem={({item, index})=>{
                    return <RepoItemComponent repo={{  name:item.name, description: item.description}} />
                  }}
                />              
            }

          </ViewList>

      </InfoComponent>

    
    </>
  );
}

export default RepoListScreen;