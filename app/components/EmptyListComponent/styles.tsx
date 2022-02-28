import styled from 'styled-components/native';


import theme from '../../../theme.json';


export const Container = styled.View`
    flex:1;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: transparent;
`;

export const ImageGithub = styled.Image.attrs({
    resizeMode: "contain",
})`
    width: 60%;
    height: 60%;
`;

export const TextEmpty = styled.Text`
    font-size: ${theme.fonts.md};
    color: ${theme.colors['color-describe']};
    font-weight: bold;
    text-align: center;
    margin-top:2px;
`;