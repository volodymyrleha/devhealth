import React, { FunctionComponent } from 'react';
import { Flex, useCSS } from '@fluentui/react-northstar';

export const Content: FunctionComponent = ({ children }) => {
    const contentClass = useCSS(() => ({
        backgroundColor: '#F4F4FC'
    }));

    return (
        <Flex className={ contentClass } column>
            { children }
        </Flex>
    );
}