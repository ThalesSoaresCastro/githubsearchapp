import styled from 'styled-components/native';

import theme from '../../../theme.json';



export const UserContainer = styled.View`
    
    flex-direction: row;
    justify-content: space-around;
    height: 10%;
    width: 100%;
    align-items: center;
`;


export const TextMessage = styled.Text`
    font-size: ${theme.fonts.md};
    color: ${theme.colors['color-describe']};
    font-weight: bold;
    text-align: center;
    margin-top:2px;
`;

export const BackgroundHeart = styled.TouchableOpacity`
    background: ${theme.colors['color-describe']};
    border-radius: 20px;
    height: 35px;
    width: 35px;
    align-items: center;
    justify-content: center;
`;


export const ViewList = styled.SafeAreaView`
    flex:1;
    background:transparent;
    width:100%;
`;
