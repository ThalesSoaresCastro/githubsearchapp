import styled from 'styled-components/native';


import theme from '../../../theme.json';

export const Container = styled.View`
    flex:1;
    height:60%;
    width:100%;
    padding: 15px 35px 15px 35px;

    align-items: center;
    flex-direction: row;
    background: transparent;

`;


export const NameDescContainer = styled.View`
    flex-direction: column;
    margin-left: 10%;
    padding-right: 35px;
`;

export const NameRepo = styled.Text`
    font-size: ${theme.fonts.md};
    color: ${theme.colors['title-color']};
`;


export const DescRepo = styled.Text`
    font-size: ${theme.fonts.sm};
    color: ${theme.colors['color-describe']};
    padding-top: 5px;
`;
