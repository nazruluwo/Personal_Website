import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

function Contact() {

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project or any professional role for me, please don't hesitate to contact!</p>
          <div>
             <AlternateEmailIcon/>
             nazrulcse2k@gmail.com
          </div>
          <div>
            <ContactPhoneIcon/>
            (1)226-678-5395
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;