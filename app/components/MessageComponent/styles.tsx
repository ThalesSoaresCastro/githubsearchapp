import styled from 'styled-components/native';


import theme from '../../../theme.json';

type TypeMessage = {
    tp:boolean;
}

export const MessageView = styled.View<TypeMessage>`
    width: 60%;
    height: 45px;
    background: white;
    elevation:3;
    position:absolute;
    top:8%;
    right:0px;

    border-style: solid;
    border-top-width:${theme.border['border-message-width']};
    border-bottom-width:${theme.border['border-message-width']};
    border-left-width:${theme.border['border-message-width']};
    border-top-left-radius:${theme.border['border-message-radius']};
    border-bottom-left-radius:${theme.border['border-message-radius']};
    
    border-color: ${props => props.tp ? theme.colors.isCheckedOk : theme.colors.isCheckedError};
`;

export const MessageContainer = styled.View<TypeMessage>`
    flex:1;
    justify-content: space-evenly;
    flex-direction: row;
    align-items:center;
    background: ${props => props.tp ? theme.colors.isCheckedOkRGBA:theme.colors.isCheckedErrorRGBA};
`;

export const TextMessage = styled.Text<TypeMessage>`
    text-align: center;
    color: ${props => props.tp ? theme.colors.isCheckedOk : theme.colors.isCheckedError};
    font-size: ${theme.fonts.md};
`;