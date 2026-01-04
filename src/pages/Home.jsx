import React from 'react';
import Banner from '../components/Banner';
import ClientFeedback from '../components/ClientFeedback';
import BooksOfWeek from '../components/bookOfTheWeek/BooksOfTheWeek';
import RecentlyAddedBooks from '../components/recentlyAddedBooks/RecentlyAddedBooks';
import Container from '../components/shared/Container';
import FeatureHighlight from '../components/featureHighlight/FeatureHighlight';
import Discount from '../components/Discount/Discount';
import Stat from '../components/stat/Stat';

const Home = () => {

    return (
        <Container>
            <Banner />
            <FeatureHighlight />
            <RecentlyAddedBooks />
            <ClientFeedback />
            <BooksOfWeek />
            <Stat />
            <Discount />
        </Container>
    );
};

export default Home;