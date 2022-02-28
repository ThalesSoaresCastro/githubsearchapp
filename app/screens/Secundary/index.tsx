import React, { useContext, useEffect} from 'react';
import { FlatList } from 'react-native';
import EmptyListComponent from '../../components/EmptyListComponent';

import InfoComponent from '../../components/InfoComponent';
import UserItemComponent from '../../components/UserItemComponent';
import UserContext from '../../contexts/UserContext';

import { Container, TextMessage,ViewList } from './styles';

const Secundary: React.FC = () => {

  const {listUser} = useContext(UserContext);

  return(
    <InfoComponent>

    <Container>
      <TextMessage>
        Meus Favoritos
      </TextMessage>
    </Container>

    <ViewList>
      {
        listUser.length === 0 ? <EmptyListComponent message={'Não existe usuários favoritos.'}/>
        :
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
                      removeItem={true}
                    />
          }}
        />
      }
    </ViewList>

    </InfoComponent>
  );
}

export default Secundary;