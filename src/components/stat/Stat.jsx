import React from 'react';
import { LuBookText, LuShoppingCart } from "react-icons/lu";
import { BsPeople } from "react-icons/bs";
import { FaRegFaceMeh } from "react-icons/fa6";

const Stat = () => {
    return (
        <div className='mb-32 flex gap-3 justify-center md:justify-around lg:justify-between flex-wrap'>
            <div className='px-12 py-9 flex gap-8 rounded-2xl items-center bg-white border border-neutral-300 w-fit'>
             <span className='bg-[#edebfc] p-4 rounded-full'><LuBookText size='37' color='#7261d4'/></span>
             <div className='space-y-1'>
                <h3 className='text-3xl font-semibold'>12, 343</h3>
                <p className='text-neutral-400'>Total Books</p>
             </div>
            </div>
            <div className='px-12 py-9 flex gap-8 rounded-2xl items-center bg-white border border-neutral-300 w-fit'>
             <span className='bg-[#e9f9fd] p-4 rounded-full'><BsPeople size='37' color='#4dc1db'/></span>
             <div className='space-y-1'>
                <h3 className='text-3xl font-semibold'>12, 343</h3>
                <p className='text-neutral-400'>Total Books</p>
             </div>
            </div>
            <div className='px-12 py-9 flex gap-8 rounded-2xl items-center bg-white border border-neutral-300 w-fit'>
             <span className='bg-[#e8f6e1] p-4 rounded-full'><LuShoppingCart size='37' color='#72c949'/></span>
             <div className='space-y-1'>
                <h3 className='text-3xl font-semibold'>12, 343</h3>
                <p className='text-neutral-400'>Total Books</p>
             </div>
            </div>
            <div className='px-12 py-9 flex gap-8 rounded-2xl items-center bg-white border border-neutral-300 w-fit'>
             <span className='bg-[#fbf1e6] p-4 rounded-full'><FaRegFaceMeh size='37' color='#fa8c17'/></span>
             <div className='space-y-1'>
                <h3 className='text-3xl font-semibold'>12, 343</h3>
                <p className='text-neutral-400'>Total Books</p>
             </div>
            </div>
        </div>
    );
};

export default Stat;