import styled from 'styled-components/native';

import theme from '../../../theme.json';


export const Container = styled.View`
    flex-direction: row;
    height: 10%;
    width: 100%;
    margin-left: 25%;
`;



export const TextMessage = styled.Text`
    font-size: ${theme.fonts.md};
    color: ${theme.colors['color-describe']};
    font-weight: bold;
    margin-top:2px;
`;


export const ViewList = styled.SafeAreaView`
    flex:1;
    background:transparent;
    width:100%;
`;

export const ContainerButton = styled.TouchableOpacity`
    padding: 2px;
    align-items: center;
    background: transparent;
    height:40px;
    width: 40px;
    justify-content:center;

`;


export const ViewButton = styled.View`
    width: 100%;
    flex-direction: row-reverse;
    padding: 15px 35px 15px 25px;
`;