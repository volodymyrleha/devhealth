import React from 'react';
import { Flex, Input, useCSS } from '@fluentui/react-northstar';

export default function Navbar() {
    const themedClassName = useCSS(theme => ({
        backgroundColor: theme.siteVariables.colorScheme.brand.foreground,
        gridColumn: 'span 2'
    }));

    return (
        <Flex className={ themedClassName } hAlign="center" vAlign="center" >
            <Input />
        </Flex>
    );
}