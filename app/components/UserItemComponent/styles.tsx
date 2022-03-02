import styled from 'styled-components/native';


import theme from '../../../theme.json';

export const Container = styled.View`
    padding: 15px 35px 15px 35px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background: transparent;
`;

export const ImageContainer = styled.View`
    height:100%;
    width: 50%;
    flex-direction: row;
    background: transparent;
    align-items:center;

`;

export const NameUser = styled.Text`
    font-size: ${theme.fonts.sm};
    color: ${theme.colors['color-describe']};
    text-align:center;
    margin-left: 15%;
`;

export const ImageUser = styled.Image`
    border-radius: ${theme.border['radius-button']};
    height: 50px;
    width:50px;
`;


export const TextListView = styled.Text`
    font-size: ${theme.fonts.md};
    color: ${theme.colors['color-describe']};
    padding: 5%;
`;


export const ContainerButton = styled.View`
    background: transparent;
    flex-direction: row-reverse;
    align-items: center;
`;


export const TouchButton = styled.TouchableOpacity`
    padding: 2px;
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content:center;
    background: transparent;
    margin-left:4px;
`;


