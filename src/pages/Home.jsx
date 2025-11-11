import React from 'react';
import Banner from '../components/Banner';
import ClientFeedback from '../components/ClientFeedback';
import BooksOfWeek from '../components/bookOfTheWeek/BooksOfTheWeek';

const Home = () => {
    return (
        <div>
            <Banner />
            <BooksOfWeek />
            <ClientFeedback />
        </div>
    );
};

export default Home;