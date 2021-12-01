import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="site-footer site-footer--with-clipmask">
      <div className="container">
      <div className="row">
        <div className="col-md-12">
      <div className="site-footer__quote">"Let me build what you need..."</div>
      <div className="site-social">
        <div className="site-social__list">
          <a target="_blank" href="https://facebook.com/shakawat.hossain.arman">
          <FaFacebook fontSize="2em"></FaFacebook>
          </a>
        </div>
        <div className="site-social__list">
          <a target="_blank" href="https://github.com/shakawatharman">
          <FaGithub fontSize="2em"></FaGithub>
          </a>
      
        </div>
        <div className="site-social__list">
          <a target="_blank" href="https://www.linkedin.com/in/shakawat-hossain-arman/">
          <FaLinkedin fontSize="2em"></FaLinkedin>
          </a>
        </div>
      </div>
      <div className="site-footer__copyright"> <MdEmail />  mail.shakawat.hossain@gmail.com <br /> Copyright &copy; 2021 
       </div>
       </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer;