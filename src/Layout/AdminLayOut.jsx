import React from 'react';
import AdminSlite from '../DashBoard/Admin/AdminSlite';
import { Outlet } from 'react-router-dom';

const AdminLayOut = () => {
    return (
        <div className='flex'>
            <div className="w-[300px]">
            <AdminSlite></AdminSlite>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminLayOut;