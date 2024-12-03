import React from 'react';
import Nav from '../Component/Optional/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Optional/Footer';

const Layout = () => {
    return (
        <div>
            <Nav></Nav>

            <div className="">
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Layout;