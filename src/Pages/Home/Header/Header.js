import React from 'react';
import Navigation from '../../../Components/Navigation/Navigation';
import About from '../About/About';

const Header = () => {
    return (
        <div>
            <Navigation></Navigation>
            <About></About>
        </div>
    );
};

export default Header;