import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div id="home">
            <div className="single-homepage-slide">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto text-center">
                            <div className="slide-text wow fadeIn">
                                <h2>I'm <span>SHAKAWAT HOSSAIN</span></h2>
                                <p className="">Hello, I'm a Junior Web Developer. I'm ready to be hired as a MERN Stack Web Developer. <br /> 
                                If need service for designing and developing your website, feel free to contact with me.
                                </p>
                                <a href="#" className="box-btn">Hire Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;