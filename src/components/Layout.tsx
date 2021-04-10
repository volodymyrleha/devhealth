import React from 'react';
import { Grid } from '@fluentui/react-northstar';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Intranet } from './pages';

export default function Layout() {
    return (
        <Grid columns="auto 1fr" rows="50px calc(100vh - 50px)">
            <Navbar />
            <Sidebar />
            <Intranet />
        </Grid>
    );
}