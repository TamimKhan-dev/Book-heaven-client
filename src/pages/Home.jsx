import React from 'react';
import Banner from '../components/Banner';
import ClientFeedback from '../components/ClientFeedback';
import BooksOfWeek from '../components/bookOfTheWeek/BooksOfTheWeek';
import RecentlyAddedBooks from '../components/recentlyAddedBooks/RecentlyAddedBooks';
import Container from '../components/shared/Container';
import FeatureHighlight from '../components/featureHighlight/FeatureHighlight';

const Home = () => {

    return (
        <Container>
            <Banner />
            <FeatureHighlight />
            <RecentlyAddedBooks />
            <ClientFeedback />
            <BooksOfWeek />
        </Container>
    );
};

export default Home;