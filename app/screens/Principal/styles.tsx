import styled from 'styled-components/native';


import theme from '../../../theme.json';

export const Container  = styled.View`
    width:100%;
    background:transparent;
    height: 15%;
    justify-content: center;
    align-items:center;
    flex-direction: row;
`;


export const SearchUser = styled.TextInput.attrs({
    placeholder: 'Buscar Usuário',
    padding: 10
})`
    border-width:1px;
    border-color: ${theme.colors['color-describe']};
    width:70%;
    height: 50px;
    border-radius: ${theme.border['radius-button']};
    background: white;
`; 

export const ButtonSearch = styled.TouchableOpacity`
    width: 65px;
    height: 50px;
    background: ${theme.colors['color-button-search']};
    align-items:center;
    justify-content:center;
    border-radius: ${theme.border['radius-button']};
    margin-left: 2%;
`;



export const ViewList = styled.SafeAreaView`
    flex:1;
    background:transparent;
    width:100%;
`;


