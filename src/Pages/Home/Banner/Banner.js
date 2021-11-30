import React from 'react';
import { NavLink } from 'react-bootstrap';
import TextAnimation from 'react-animate-text';
import './Banner.css';

const Banner = () => {
    return (
        <div id="home">
            <div className="single-homepage-slide">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto text-center">
                            <div className="slide-text wow fadeIn">
                                <h2>I'm <TextAnimation> <span>SHAKAWAT HOSSAIN</span> </TextAnimation></h2>
                                <p className="">Hello, I'm a Junior Web Developer. I'm ready to be hired as a MERN Stack Web Developer. <br /> 
                                If need service for designing and developing your website, feel free to contact with me.
                                </p>
                                <NavLink target="_blank" href="https://drive.google.com/file/d/1H7NRmvRZ_4tdGIM3pGy6242YkuYJY3Wm/view?usp=sharing" className="box-btn">Hire Me</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;