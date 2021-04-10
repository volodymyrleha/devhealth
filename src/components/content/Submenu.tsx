import React, { FunctionComponent } from 'react';
import ReactMegaMenu from 'react-mega-menu';
import { Grid, Header, List, useCSS } from '@fluentui/react-northstar';

type SubmenuType = {
    data: any
}

export const Submenu: FunctionComponent<SubmenuType> = ({ data }) => {
    const megaMenuStyles = {
        containerProps: {
            style: {
                position: 'relative'
            }
        },
        menuProps: {
            style: {
                margin: 0
            }
        },
        menuItemProps: {
            style: {
                padding: '12px 24px',
                width: '320px',
                fontWeight: 600,
                backgroundColor: '#EDEBE9'
            }
        },
        menuItemSelectedProps: {
            style: {
                padding: '12px 24px',
                width: '320px',
                fontWeight: 600,
                backgroundColor: 'white'
            }
        },
        contentProps: {
            style: {
                padding: '12px 24px',
                backgroundColor: 'white',
                width: '480px'
            }
        }
    }

    const submenuHeaderClass = useCSS(() => ({
        margin: 0
    }));

    const listClass = useCSS(() => ({
        'li': {
            padding: 0,
            minHeight: '40px'
        },
        '.ui-list__itemcontent': {
            fontSize: '16px'
        }
    }));

    const menuData = data.map((menu, index) => ({
        key: index,
        label: menu.menu,
        items: <Grid columns="1fr 1fr"> {
            menu.submenu.map((submenu, index) => { 
                return <div key={ index } style={{ marginBottom: '20px' }}>
                    <Header as="h3" className={ submenuHeaderClass } content={ submenu.header } /> 
                    <List className={ listClass } items={ submenu.subsubmenu.map((item, i) => ({ key: i, content: item })) } />
                </div>
            })
        } </Grid>
    }));

    return (            
        <ReactMegaMenu styleConfig={ megaMenuStyles } data={ menuData } />
    );
}