import React from 'react';
import './About.css';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
    return (
        <div id="about" className="about-section gray-bg section-padding smooth-scrolling">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="section-title"><h1>About <span>Me</span></h1></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-5">
                    <div className="about-left-content">
                        <div className="person-img">.</div>
                        <div className="person-meta">
                            <h2>Shakawat</h2>
                            <div className="social-links">
                                <FaFacebook></FaFacebook>
                                <FaLinkedin className="mx-3"></FaLinkedin>
                                <FaTwitter></FaTwitter>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 col-sm-7">
                    <div className="about-right-content">
                        <h2 className="text-start">I’m a MERN Stack Web Developer</h2>
                        <p className="text-start"><b>Programming is my passion.</b>I am a self motivated person, who want to learn new thing always. Though I'm from non-technical background, I learnt programming as I like this.</p>
                        <p className="text-start"><b>I always want to take challenge.</b>Currently I'm working remotely in a company as a Junior Executive Officer. But I want to take challenge, that's why I want to start my career as a Web Developer now.</p>
                        <a href="https://drive.google.com/file/d/1H7NRmvRZ_4tdGIM3pGy6242YkuYJY3Wm/view?usp=sharing" className="box-btn">My Resume<i className="fa fa-download"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default About;