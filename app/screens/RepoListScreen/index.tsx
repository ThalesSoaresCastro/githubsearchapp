import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import InfoComponent from '../../components/InfoComponent';
import UserContext from '../../contexts/UserContext';
import { UserContainer, TextMessage, BackgroundHeart, ViewList } from './styles';

// import { Container } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import GithubApi from '../../services/GithubApi';
import EmptyListComponent from '../../components/EmptyListComponent';
import RepoItemComponent from '../../components/RepoItemComponent';

const RepoListScreen: React.FC = () => {

  const [repoListUser, SetRepoListUser] = useState([]);
  const[error, SetError] = useState(false);

  const{user, listUser, AddUser} = useContext(UserContext);

  useEffect(()=>{
      async function SetRepo() {
        const response = await GithubApi.getRepos({repo:user.repos_url});
        if(response.status){
          return SetError(true);
        }
        SetRepoListUser(response);

        //console.log('listUser: ', listUser);

      }
      SetRepo();
  },[]);

  //console.log('LISTA: ',repoListUser.length);

  return(
      <InfoComponent>
          <UserContainer>
            <TextMessage>
              Favoritar {user.login} ?
            </TextMessage>
            <BackgroundHeart
              onPress={async()=>{
                //console.log('userRepo: ', user)

                await AddUser(user);
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
  );
}

export default RepoListScreen;