import React from 'react';
import Navigation from '../../../Components/Navigation/Navigation';
import About from '../About/About';
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Header;