import React from 'react';
import Nav from '../Component/Optional/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Optional/Footer';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Nav></Nav>

            <div className="max-w-[1900px] mx-auto">
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Layout;