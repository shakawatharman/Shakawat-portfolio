import React from 'react';

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
                        <div class="single-service-section wow fadeInUp">
                            <div class="service-icon"><i class="fa fa-phone"></i></div>
                            <h3>Web Design</h3>
                            <p>I'm a Web Developer, as well as I'm a Web Designer. If you provide a pre-built template, I can develop this. But if you don't provide your site design, then I may handle designing too.</p>
                            {/* <p> */}
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 text-center">
                        <div class="single-service-section wow fadeInUp">
                            <div class="service-icon">
                                <div class="service-icon"><i class="fa fa-support"></i></div>
                            </div>
                            <h3>Web Development</h3>
                            <p>I'm a MERN Stack Developer. I'm a certified developer from a renowned institution named as Programming Hero. Feel free to contact me for developing your website.</p>
                            {/* <p> */}
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 text-center">
                        <div class="single-service-section wow fadeInUp">
                            <div class="service-icon">
                                <div class="service-icon"><i class="fa fa-download"></i></div>
                            </div>
                            <h3>Responsive Website</h3>
                            <p>I'm always responsible for any of my project. I will make sure that the website will be well responsive for Computer device, Mobile device. Contact me to make a responsible website for you.</p>
                            {/* <p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyService;