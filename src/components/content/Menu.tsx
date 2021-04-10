import React, { FunctionComponent } from 'react';
import { Flex, MenuIcon, MoreIcon, useCSS } from '@fluentui/react-northstar';
import ReactMegaMenu from 'react-mega-menu';
import { Submenu } from './Submenu';

type ContentMenuType = {
    data: any
}

export const Menu: FunctionComponent<ContentMenuType> = ({ data }) => {
    const containerClass = useCSS(theme => ({
        backgroundColor: theme.siteVariables.colorScheme.brand.backgroundHover1,
        padding: '0px 30px',
        boxShadow: '0 4px 2px -2px gray'
    }));

    const megaMenuStyles = {
        containerProps: {
            style: {
                position: 'relative'
            }
        },
        menuProps: {
            style: {
                margin: 0,
                height: '48px',
                display: 'flex'
            }
        },
        menuItemProps: {
            style: {
                display: 'inline',
                padding: '12px',
                fontWeight: 600
            }
        },
        menuItemSelectedProps: {
            style: {
                display: 'inline',
                padding: '12px',
                fontWeight: 600,
                backgroundColor: '#EDEBE9'
            }
        },
        contentProps: {
            style: {
                position: 'absolute',
                top: '48px',
                left: 0
            }
        }
    }

    const megaMenuData = data.map((menu, index) => ({
        key: index,
        label: menu.menu,
        items: <Submenu data={ menu.submenu } />
    }));

    return (       
        <Flex className ={ containerClass } gap="gap.medium" vAlign="center" >
            <MenuIcon size="large" />
            <ReactMegaMenu styleConfig={ megaMenuStyles } data={ megaMenuData } />
            <MoreIcon size="large" />
        </Flex>
    );
}