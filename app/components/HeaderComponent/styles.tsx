import styled from 'styled-components/native';

import theme from '../../../theme.json';


export const Container = styled.View`
    flex-direction: column;
    height:32%;
    padding-top:10%;
    padding-right:5%;
    background:${theme.colors['black-head']};
`;

export const ViewIcon = styled.View`
    flex-direction: row-reverse;
    height: 100%;
    width: 100%;
    background: transparent;
    align-items: center;
`;
