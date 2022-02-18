import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

export default function Layout() {
    return (
        <React.Fragment>
            <Header />
            <Sidebar />
            <div className="main">
                <Outlet />
            </div>
        </React.Fragment>
    )
}
