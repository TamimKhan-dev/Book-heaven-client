import React from 'react';
import Banner from '../components/Banner';
import ClientFeedback from '../components/ClientFeedback';
import BooksOfWeek from '../components/bookOfTheWeek/BooksOfTheWeek';
import RecentlyAddedBooks from '../components/recentlyAddedBooks/RecentlyAddedBooks';

const Home = () => {

    return (
        <div>
            <Banner />
            <RecentlyAddedBooks />
            <ClientFeedback />
            <BooksOfWeek />
        </div>
    );
};

export default Home;