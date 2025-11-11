import React from 'react';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';

const BookOfTheWeekCards = ({ book }) => {
    const { image, title, rating, author_name, price } = book;
    
    return (
        <div className='flex gap-4'>
            <img src={image} alt="" className='w-28 h-42 rounded-lg'/>
            <div className='flex flex-col justify-between'>
                <h4 className='font-semibold text-xl'>{title}</h4>

                <div className='flex items-center gap-2'>
                    <div className='flex text-yellow-500'>
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStarHalf />
                    </div>
                    <span className='font-semibold'>{rating}</span>
                </div>

                <p className='font-semibold'>{author_name}</p>

                <h6 className='text-2xl font-bold'>${price}</h6>
            </div>
        </div>
    );
};

export default BookOfTheWeekCards;