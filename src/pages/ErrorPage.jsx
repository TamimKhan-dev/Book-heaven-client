import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import errorImg from '../assets/info.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex bg-[#f4f4f4] flex-col items-center min-h-screen'>
            <Navbar />
            <div className='bg-white w-fit mx-10 flex flex-col gap-7 justify-between items-center flex-1 my-28 md:my-10 relative px-3 py-6 sm:px-5 rounded-xl shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]'>
                <h3 className='text-3xl md:text-5xl whitespace-nowrap font-bold'>404, Page Not found</h3>
                <img src={errorImg} alt=""  className='w-50 h-50 lg:w-80 lg:h-80'/>
                <p className='text-gray-500'>Oops… looks like this page wandered off.</p>
                <Link to="/" className="cursor-pointer box-border transition-all bg-blue-500 text-white px-6 py-2 rounded-lg hover:brightness-110 active:brightness-90 font-semibold">Go Home</Link>
            </div>
            <Footer />
        </div>
    );
};

export default ErrorPage;