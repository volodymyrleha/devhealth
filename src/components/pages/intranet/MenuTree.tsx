import * as React from 'react';
import { Tree, TriangleDownIcon, TriangleEndIcon } from '@fluentui/react-northstar';
import { MenuContext } from '../../../context/MenuContext';

export const MenuTree: React.FC = () => {
    const { menu } = React.useContext(MenuContext);

    const items = menu.map((root, i) => ({
        id: root.menu + i,
        title: root.menu,
        items: root.submenu.map((submenu, i) => ({
            id: submenu.menu + i + Math.random(),
            title: submenu.menu,
            items: submenu.submenu.map((subsubmenu, i) => ({
                id: subsubmenu.header + i + Math.random(),
                title: subsubmenu.header,
                items: subsubmenu.subsubmenu.map((item, i) => ({
                    id: item + i + Math.random(),
                    title: item
                }))
            }))
        }))
    }));

    return (
        <Tree items={ items } renderItemTitle={(Component, { content, expanded, hasSubtree, ...restProps }) => 
            <Component expanded={ expanded } hasSubtree={ hasSubtree } { ...restProps }>
                { expanded ? <TriangleDownIcon /> : <TriangleEndIcon /> }
                { content }
            </Component>} 
        />
    );
}