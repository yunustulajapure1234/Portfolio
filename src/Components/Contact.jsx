import React from 'react';
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="container contact" id='contact'>
      <h1 style={{color:'yellow' }}>Contact</h1>
      <div className="contact-icon"
       data-aos="zoom-in-up" data-aos-duration="1000">
        <a href='#' className="items">
          <FaInstagramSquare className='icons'/>
        </a>
        <a href='#' className="items">
          <FaFacebookSquare className='icons'/>
        </a>
        <a href='#' className="items">
          <AiFillLinkedin className='icons' />
        </a>
        <a href='#' className="items">
          <FaTwitterSquare className='icons' />
        </a>
        <a href='https://github.com/yunustulajapure1234' className="items">
          <FaGithubSquare className='icons'/>
        </a>
        <a href='mailto:yunustulajapure524@gmail.com' target="_blank" className="items">
          <SiGmail className='icons'/>
        </a>
      </div>
    </div>
  );
};

export default Contact;
