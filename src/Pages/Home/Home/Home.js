import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../Header/Header';
import MyService from '../MyService/MyService';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <MyService></MyService>
            <Footer></Footer>
        </div>
    );
};

export default Home;