import styled from 'styled-components/native';

import theme from '../../../theme.json';


export const Container = styled.View`
    flex: 1;
    background:${theme.colors['black-head']};
`;

export const ViewInfo = styled.View`
    flex:1;
    padding-top:10%;
    background:${theme.colors.backgroud};
    border-top-left-radius:${theme.border.radius};
    border-top-right-radius:${theme.border.radius};
    align-items: center;
`;