import React, { useState } from 'react';
import { Content, Navbar } from '../../content';
import Dashboard from './Dashboard';
import Settings from './Settings';
import { MenuProvider } from '../../../context/MenuContext';

export const Intranet: React.FC = () => {
    const tabs = ['Dashboard', 'Settings']
    const [activeTab, setActiveTab] = useState(tabs[0]);    

    return (
        <Content>
            <MenuProvider>
                <Navbar header="Intranet" tabs={ tabs } setActiveTab={ setActiveTab } />
                {
                    activeTab === 'Dashboard' ?
                    <Dashboard /> :
                    <Settings />
                }
            </MenuProvider>
        </Content>
    );
}