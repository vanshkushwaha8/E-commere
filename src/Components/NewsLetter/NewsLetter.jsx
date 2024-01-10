import React, { useRef } from 'react';
import './NewsLetter.css';
import emailjs from '@emailjs/browser';

const NewsLetter = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6v1c4yk', 'template_0pfbv3o', form.current, 'Za2nD_gUMfjcsSq_U')
        .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          alert('Email Sent !');
        }, (error) => {
          console.log(error.text);
        });
  };
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe to our newsletter and stay updated !</p>
        <div>
        <form className='newsletter-form'ref={form} onSubmit={sendEmail} >
            <input type='text' placeholder='name' className='name' name='from_name' />
            <input type='email' placeholder='your email' className='email' name='from_email'/>
            <textarea name='message' className='msg' rows='5' placeholder='your message'>  </textarea>
            <button className='submitBtn' value='Send' type='submit'>Submit</button>
        </form>
        </div>
      
    </div>
  )
}

export default NewsLetter
