import React from 'react';
import books from '../../data/books.json'
import BookOfTheWeekCards from './BookOfTheWeekCards';

const BooksOfWeek = () => {
    
    return (
        <div className='w-10/12 mx-auto mb-18'>
            <h3 className='text-3xl lg:text-4xl font-bold mb-10'>Books of the Week</h3>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {
                books.map(book => <BookOfTheWeekCards key={book.id} book={book}/>)
              }
            </div>
        </div>
    );
};

export default BooksOfWeek;