import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <div className="container border email-form">
            <h1>Send Your Message</h1>
            
            <form className="row text-start">
                <label>Name</label>
                <input className="form-control" type="text" name="name" />

                <label>Email</label>
                <input className="form-control"  type="email" name="user_email" />

                <label>Message</label>
                <textarea className="form-control" name="message" rows='4' />

                <input className="btn btn-primary mt-5" value="Send" />
            </form>
        </div>
    );
};

export default ContactMe;