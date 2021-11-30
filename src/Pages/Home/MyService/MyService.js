import React from 'react';

const MyService = () => {
    return (
        
        <div id="services" class="service-section section-padding smooth-scrolling">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="section-title"><h1>Our <span>Services</span></h1></div>
                    </div>
                </div>
                <div class="row">
                
                    <div class="col-md-4 col-sm-4 text-center">
                        <div class="single-service-section wow fadeInUp">
                            <div class="service-icon"><i class="fa fa-phone"></i></div>
                            <h3>Web Design</h3>
                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis</p>
                            {/* <p> */}
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 text-center">
                        <div class="single-service-section wow fadeInUp">
                            <div class="service-icon">
                                <div class="service-icon"><i class="fa fa-support"></i></div>
                            </div>
                            <h3>Web Development</h3>
                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis</p>
                            {/* <p> */}
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-4 text-center">
                        <div class="single-service-section wow fadeInUp">
                            <div class="service-icon">
                                <div class="service-icon"><i class="fa fa-download"></i></div>
                            </div>
                            <h3>Responsive Website</h3>
                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis</p>
                            {/* <p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyService;