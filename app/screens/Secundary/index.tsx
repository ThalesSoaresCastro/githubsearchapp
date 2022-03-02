import React, { useContext, useEffect, useState} from 'react';
import { FlatList } from 'react-native';
import EmptyListComponent from '../../components/EmptyListComponent';

import InfoComponent from '../../components/InfoComponent';
import UserItemComponent from '../../components/UserItemComponent';
import UserContext from '../../contexts/UserContext';

import { Container, ContainerButton, TextMessage,ViewButton,ViewList } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

import theme from '../../../theme.json';

import { useNavigation } from '@react-navigation/native';

const Secundary: React.FC = () => {
  const navigation = useNavigation();
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
            renderItem={({item, index})=>{

              {console.log(item, index, listI.length-1)}
              return(
                index === listI.length-1?
                <>
                <UserItemComponent 
                      user={{
                              login: item.login,
                              id: item.id,
                              avatar_url: item.avatar_url,
                              repos_url: item.repos_url
                          }}
                        removeItem={true}
                />      
                <ViewButton>
                  <ContainerButton
                    onPress={()=>{return navigation.goBack();}}
                  >
                  <FontAwesomeIcon 
                          icon={faAngleRight} 
                          color={theme.colors['color-describe']} 
                          size={15} 
                      />
                  </ContainerButton>
                </ViewButton>
                </>:
                <UserItemComponent 
                      user={{
                              login: item.login,
                              id: item.id,
                              avatar_url: item.avatar_url,
                              repos_url: item.repos_url
                          }}
                        removeItem={true}
                />
              )
            }}
          />
          </>
        }
      </ViewList>
    </InfoComponent>
  );
}

export default Secundary;