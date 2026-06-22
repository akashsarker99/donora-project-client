import Navbar from '@/components/Navbar';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
        </div>
    );
};

export default AuthLayout;