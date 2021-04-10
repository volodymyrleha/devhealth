import React, { FunctionComponent } from 'react';
import { Flex, useCSS } from '@fluentui/react-northstar';

export const FullscreenPage: FunctionComponent = ({ children }) => {
    const containerClass = useCSS(() => ({
        margin: '16px',
        height: 'calc(100% - 32px)',
        width: 'calc(100% - 32px)',
        backgroundColor: 'white'
    }));

    return (
        <Flex className={ containerClass }>
            { children }
        </Flex>
    );
}