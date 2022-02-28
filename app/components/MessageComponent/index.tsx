import React from 'react';
import { Text } from 'react-native';

import { 
    MessageContainer,
    MessageView,
    TextMessage,
} from './styles';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleExclamation, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

type params = {
    message: string;
    type:boolean;
}

const MessageComponent: React.FC<params> = ({message, type}) => {
    return(
        <MessageView tp={type} >
            <MessageContainer tp={type} >
                
                <FontAwesomeIcon 
                    icon={ type ? faCircleCheck : faCircleExclamation } 
                    color={type? "green" : "red"} 
                    size={30} 
                />

                <TextMessage tp={type} >
                    {message}
                </TextMessage>
            </MessageContainer>
        </MessageView>
    );
}

export default MessageComponent;