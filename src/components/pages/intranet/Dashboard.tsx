import * as React from 'react';
import { Menu } from '../../content';
import { MenuContext } from '../../../context/MenuContext';

export default function Dashboard() {
    const { menu } = React.useContext(MenuContext);

    return (
        <Menu data={ menu } />
    );
}