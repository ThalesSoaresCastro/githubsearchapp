import React, { useContext, useEffect, useState} from 'react';
import { FlatList } from 'react-native';
import EmptyListComponent from '../../components/EmptyListComponent';

import InfoComponent from '../../components/InfoComponent';
import UserItemComponent from '../../components/UserItemComponent';
import UserContext from '../../contexts/UserContext';

import { Container, ContainerButton, TextMessage,ViewList } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';


import theme from '../../../theme.json';

const Secundary: React.FC = () => {

  const {listUser} = useContext(UserContext);

  const [listI, SetListI] = useState([]);

  useEffect(()=>{
    async function SetData() {
      if(listUser){
        SetListI(listUser);
      }
    }

    SetData();
  
  },);

  return(
    <InfoComponent>

    <Container>
      <TextMessage>
        Meus Favoritos
      </TextMessage>
    </Container>

    <ViewList>
      {
        listI.length === 0 ? <EmptyListComponent message={'Não existe usuários favoritos.'}/>
        :
        <>
        <FlatList
          data={listI}
          keyExtractor={item => item.id.toString() }
          renderItem={({item})=>{
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
          style={{backgroundColor:'transparent'}}
        />

        <ContainerButton>
        <FontAwesomeIcon 
                icon={faAngleRight} 
                color={theme.colors['color-describe']} 
                size={15} 
            />
        </ContainerButton>

        </>
      }
    </ViewList>

    </InfoComponent>
  );
}

export default Secundary;