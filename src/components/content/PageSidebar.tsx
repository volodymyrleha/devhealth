import React, { FunctionComponent } from 'react';
import { Flex, Header, Text, Menu, ComposeIcon, useCSS } from '@fluentui/react-northstar';

type PageSidebarProps = {
    header: string,
    data: any
}

export const PageSidebar: FunctionComponent<PageSidebarProps> = ({ header, data }) => {
    const containerClass = useCSS((theme) => ({
        margin: '12px',
        height: 'calc(100% - 24px)',
        width: '320px',
        borderRight: `2px solid ${ theme.siteVariables.colorScheme.brand.border }`,
        position: 'relative'
    }));

    const headerClass = useCSS((theme) => ({
        margin: '0px 12px 16px 0px',
        paddingBottom: '12px',
        borderBottom: `2px solid ${ theme.siteVariables.colorScheme.brand.border }`
    }));

    const menuClass = useCSS(() => ({
        width: '100%',
        border: 'none',
        'li:first-child h5': {
            marginTop: '0'
        },
        'a': {
            paddingLeft: '54px'
        }
    }));

    const menuHeaderClass = useCSS(() => ({
        textAlign: 'left',
        fontSize: '20px',
        margin: '20px 0px 12px',
        paddingLeft: '54px',
        position: 'relative'
    }));

    const menuNumberClass = useCSS((theme) => ({
        borderRadius: '50%',
        backgroundColor: theme.siteVariables.colorScheme.brand.foreground,
        color: 'white',
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: '0',
        top: '-3px'
    }));

    const menuItems = data.map((menu, index) => ({
        key: index,
        kind: menu.divider ? 'divider' : null,
        content: menu.divider ? <Header className={ menuHeaderClass } as="h5" content={ 
            <>
                <Text className={ menuNumberClass } content={ menu.divider } /> 
                { menu.content }
            </> 
        } /> : menu.content,
        icon: menu.divider ? null : <ComposeIcon />
    }));

    return (
        <Flex className={ containerClass } column>
            <Header className={ headerClass } as="h2" content={ header } />
            <Menu className={ menuClass } defaultActiveIndex={0} items={ menuItems } vertical />
        </Flex>
    );
}