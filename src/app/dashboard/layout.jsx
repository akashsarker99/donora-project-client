
import DashboardNavbar from '@/components/DashboardNavbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>       
             <div className='flex min-h-screen'>
             <DashboardSidebar></DashboardSidebar>
            <div className='flex-1'>
                <DashboardNavbar></DashboardNavbar>
                {children}</div>
        </div>
        </div>
    );
};

export default DashboardLayout;