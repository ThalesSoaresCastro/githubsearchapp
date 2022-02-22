import styled from 'styled-components/native';

import theme from '../../../theme.json';


export const Container = styled.View`
    flex:1;
    flex-direction: column;
    background:${theme.colors['black-head']};
`;

export const ViewIcon = styled.View`
    flex-direction: row-reverse;
    height: 20%;
    width: 100%;
    background: red;
    padding: 2%;
    align-items: center;
`;


export const ImageIcon = styled.Image`
    height: 80%;
    width: 30%;
`;