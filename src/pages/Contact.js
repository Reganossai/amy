import emailjs from 'emailjs-com';
import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () =>{
 function sendEmail(e){
  e.preventDefault();

    emailjs.sendForm('service_osmvpiw', 'template_hamtta8', e.target, 'N8CG5vp80Y6GOCZYy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
e.target.reset()
 }
return(
	<div className="pirlo">
	<div className="contact-header">
	<Navbar/>
	</div>

	<div className="first-content-contact">
<h1><b>Contact Me</b></h1>
<p>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>

<form onSubmit={sendEmail}>
<div className="all-forms">
<div className="name-form">
<input type="text" className="form-control" placeholder="Name" name="name"/>
</div>
<div className="email-form">
<input type="email" className="form-control" placeholder="Email Address" name="email"/>
</div>
<div className="subject-form">
<input type="text" className="form-control" placeholder="Subject" name="subject"/>
</div>
<div className="message-formmm">
<textarea className="form-control" id="" cols="14" rows="4" placeholder="Your message" name="message"></textarea>
</div>
<div className="boro">
  <button type="submit" id="submittt" className='btn btn-outline-dark'>Submit Message</button>
</div>
</div>
</form>
</div>
	</div>);




} 
export default Contact;