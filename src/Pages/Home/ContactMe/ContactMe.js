import React from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com'

const ContactMe = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nluamkg',
        'template_mdghi0l',
        e.target,
        'user_gkM6DYqFPBl3zKX8hb4zC'
        ).then(res=>{
            console.log(res)
        }).catch(err=>{console.log(err)})
        alert('Thanks for your message!')
        e.target.reset()
    }
    return (
        <div className="container border section-padding email-form">
            <h1>Send Your Message</h1>
            
            <form className="row text-start" onSubmit={sendEmail}>
                <label>Name</label>
                <input className="form-control" type="text" name="name" />

                <label>Email</label>
                <input className="form-control"  type="email" name="user_email" />

                <label>Message</label>
                <textarea className="form-control" name="message" rows='4' />

                <input className="btn btn-primary mt-5" type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactMe;