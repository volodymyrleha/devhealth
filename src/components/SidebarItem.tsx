import React, { FunctionComponent } from 'react';
import { Flex, Text } from '@fluentui/react-northstar';

type SidebarItemProps = {
    content: string
}

export const SidebarItem: FunctionComponent<SidebarItemProps> = ({ content, children }) => {
    return (    
        <Flex column hAlign="center" vAlign="center">
            { children }
            <Text content={ content } />
        </Flex>
    );
}   