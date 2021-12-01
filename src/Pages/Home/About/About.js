import React from 'react';
import './About.css';
import { ImDownload } from "react-icons/im";
import { NavLink } from 'react-bootstrap';

const About = () => {
    return (
        <div id="about" className="about-section gray-bg p-5 smooth-scrolling">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="section-title mb-4"><h1>About <span>Me</span></h1></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-5">
                    <div className="about-left-content">
                        <div className="person-img">.</div>
                        <div className="person-meta">
                            <h2>Shakawat</h2>
                           
                        </div>
                    </div>
                </div>
                <div className="col-md-7 col-sm-7">
                    <div className="about-right-content text-start">
                        <h2 className="mt-5">I’m a MERN Stack Web Developer</h2>
                        <p><b>Programming is my passion.</b>I am a self motivated person, who want to learn new thing always. Though I'm from non-technical background, I learnt programming as I like this.</p>
                        <p className="text-start"><b>I always want to take challenge.</b>Currently I'm working remotely in a company as a Junior Executive Officer. But I want to take challenge, that's why I want to start my career as a Web Developer now.</p>
                        <NavLink target="_blank" href="https://drive.google.com/file/d/1H7NRmvRZ_4tdGIM3pGy6242YkuYJY3Wm/view?usp=sharing" className="box-btn">My Resume <ImDownload></ImDownload></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default About;