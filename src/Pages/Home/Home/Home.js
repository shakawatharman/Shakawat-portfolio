import React from 'react';
import Footer from '../../../Components/Footer/Footer';
import Header from '../Header/Header';
import MyService from '../MyService/MyService';
import Projects from '../Projects/Projects';
import SingleProject from '../SingleProject/SingleProject';

const Home = () => {
    return (
        <div>
            <Header></Header>
            {/* <SingleProject></SingleProject> */}
            <Projects></Projects>
            <MyService></MyService>
            <Footer></Footer>
        </div>
    );
};

export default Home;