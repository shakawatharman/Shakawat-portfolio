import React from 'react';
import { FaDesktop, FaMouse, FaMobileAlt } from "react-icons/fa";

const MyService = () => {
    return (
        
        <div id="services" class="service-section section-padding smooth-scrolling">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="section-title"><h1>My <span>Services</span></h1></div>
                    </div>
                </div>
                <div class="row">
                
                    <div class="col-md-4 col-sm-4 text-center">
                        <div class="single-service-section">
                            <div class="service-icon"><i class="fa fa-phone"></i></div>
                            <h3 className="mb-2 mt-5">Web Design</h3>
                            <FaMouse color="orange" fontSize="4em" />
                            <p className="mt-3 mb-5">I'm a Web Developer, as well as I'm a Web Designer. If you provide a pre-built template, I can develop this. But if you don't provide your site design, then I may handle designing too.</p>
                            
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 text-center">
                        <div class="single-service-section">
                            <div class="service-icon">
                                <div class="service-icon"><i class="fa fa-support"></i></div>
                            </div>
                            <h3 className="mb-2 mt-5">Web Development</h3>
                            <FaDesktop color="orange" fontSize="4em" />
                            <p className="mt-3 mb-5">I'm a MERN Stack Developer. I'm a certified developer from a renowned institution named as Programming Hero. Feel free to contact me for developing your website.</p>
                           
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 text-center border-left">
                        <div class="single-service-section">
                            <div class="service-icon">
                                <div class="service-icon"><i class="fa fa-download"></i></div>
                            </div>
                            <h3 className="mb-2 mt-5">Responsive Website</h3>
                            <FaMobileAlt color="orange" fontSize="4em" />
                            <p className="mt-3 mb-5">I'm always responsible for any of my project. I will make sure that the website will be well responsive for Computer device, Mobile device. Contact me to make a responsible website for you.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyService;