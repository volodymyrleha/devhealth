import React, { FunctionComponent } from 'react';
import { Flex } from '@fluentui/react-northstar';

export const Content: FunctionComponent = ({ children }) => {
    return (
        <Flex column>
            { children }
        </Flex>
    );
}