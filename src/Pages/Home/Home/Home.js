import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import MyService from '../MyService/MyService';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <MyService></MyService>
            <About></About>
            <ContactMe></ContactMe>
            
        </div>
    );
};

export default Home;