import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
import MyService from '../MyService/MyService';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            
            <Projects></Projects>
            <MyService></MyService>
            <ContactMe></ContactMe>
            
        </div>
    );
};

export default Home;