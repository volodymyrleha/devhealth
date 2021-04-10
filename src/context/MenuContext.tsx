import * as React from 'react';
import { useStorage } from '../hooks/useStorage';

interface IContextProps {
    menu: any,
    addMenu: any
}

export const MenuContext = React.createContext({} as IContextProps);

export const MenuProvider: React.FC = ({ children }) => {
    const defaultMenu = [{
        menu: 'Default 1',
        submenu: [{
            menu: 'DSubmenu 1',
            submenu: [{
                header: 'DHeader 1',
                subsubmenu: ['Default subsub 1', 'Default subsub 2', 'Default subsub 3', 'Default subsub 4']
            }, {
                header: 'DHeader 2',
                subsubmenu: ['Default subsub 1', 'Default subsub 2']
            }]
        }, {
            menu: 'DSubmenu 2',
            submenu: [{
                header: 'DHeader 1',
                subsubmenu: ['Default subsub 1', 'Default subsub 2', 'Default subsub 3', 'Default subsub 4']
            }, {
                header: 'DHeader 2',
                subsubmenu: ['Default subsub 1', 'Default subsub 2']
            }]
        }]
    }, {
        menu: 'Default 2',
        submenu: [{
            menu: 'DSubmenu 1',
            submenu: [{
                header: 'DHeader 1',
                subsubmenu: ['Default subsub 1', 'Default subsub 2', 'Default subsub 3', 'Default subsub 4']
            }]
        }]
    }]

    const storage = useStorage('megamenu', defaultMenu);

    const addMenu = (parent: string, title: string) => {
        const updatedStorage = [...storage.data];

        const parentTree = parent.split('\\');

        if (parentTree[0] === 'root')
            updatedStorage.push({ menu: title, submenu: [] });
        else {
            updatedStorage.map(root => {
                return root.menu === parentTree[0] ?
                {
                    menu: root.menu,
                    submenu: !parentTree[1] ? root.submenu.push({ menu: title, submenu: [] }) :
                        root.submenu.map(level2 => {
                            return level2.menu === parentTree[1] ? {
                                menu: level2.menu,
                                submenu: !parentTree[2] ? level2.submenu.push({ header: title, subsubmenu: [] }) : 
                                    level2.submenu.map(level3 => {
                                        return level3.header === parentTree[2] ? {
                                            header: level3.header,
                                            subsubmenu: level3.subsubmenu.push(title)
                                        } : level3;
                                    })
                            } : level2;
                        })
                } : root;
            });
        }

        console.log(updatedStorage);
        storage.setData(updatedStorage);
    }

    return (
        <MenuContext.Provider value={{ menu: storage.data, addMenu }}>
            { children }
        </MenuContext.Provider>
    );
}