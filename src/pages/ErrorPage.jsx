import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 my-28 md:my-10 relative'>
                <h3 className='text-3xl md:text-5xl absolute whitespace-nowrap sm:top-[25%] left-[50%] translate-x-[-50%] font-bold'>404, Page Not found</h3>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;