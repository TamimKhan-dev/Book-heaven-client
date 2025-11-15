import React, { use } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { AuthContext } from '../provider/AuthContext';

const MainLayout = () => {
    const { theme } = use(AuthContext);
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className={`flex-1 ${theme === 'dark' ? 'bg-[#273F4F]' : 'bg-[#f4f4f4]'}`}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;