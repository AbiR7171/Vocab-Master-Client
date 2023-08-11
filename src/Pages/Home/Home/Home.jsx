import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../../../Shared/NavBar';
import Footer from '../../../Shared/Footer';
import EarnPoints from '../section/EarnPoints';
import QuizSection from '../section/QuizSection';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <EarnPoints/>
            <QuizSection/>
            <Footer/>
        </div>
    );
};

export default Home;