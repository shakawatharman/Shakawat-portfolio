import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import ContactMe from '../ContactMe/ContactMe';
import Header from '../Header/Header';
import MyService from '../MyService/MyService';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Projects></Projects>
            <MyService></MyService>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;