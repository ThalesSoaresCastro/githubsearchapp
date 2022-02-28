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
