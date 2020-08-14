import React, { Component } from "react";
import emailjs from "emailjs-com";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css"
// import Form from 'react-bootstrap/Form';

class Contact extends Component {
state = {
messageSent: false,
name: "",
email: "",
subject: "",
message: "",
};

handleChange = (e) => {
this.setState({ [e.target.name]: [e.target.value] });
};

handleSubmit = (e) => {
e.preventDefault();
emailjs
.sendForm(
"gmail",
"khoury_portfolio_message",
"#contactForm",
"user_xZCvNCWNvoBWJdAp3hvm3"
)
.then()
.catch();

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
      messageSent: true,
    });

};

render() {
return (
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100" id="contact">
        <div class="wrapper wrapper--w780">

{/* <section id="contactme">
<h1 className="contact-title">Say Hello</h1> */}
<div className="wrapper-contact">
<div class="card card-3">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 className="title">Say Hello</h2>
<div className="contact ">
{this.state.messageSent ? (
<div className="alert animated fadeInUp">
Your Message has been sent
</div>
) : (
""
)}

            <form
                
              onSubmit={this.handleSubmit}
              className="animated delay-1s fadeInRight"
              id="contactForm"
            >
                <div class="input-group">
              
                <input
                  className="input--style-3"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  id="form-name"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              
              </div>
              {/* <br /> */}
              <div class="input-group">
            
                <input
                className="input--style-3"
                  name="email"
                  type="email"
                  placeholder="E-mail Address"
                  id="form-email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
             
              </div>
              {/* <br /> */}
              <div class="input-group">
             
                <input
                 className="input--style-3"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  id="form-subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
              
              </div>
              <div class="input-group">
              
            
                <textarea
                  name="message"
                  type="text"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.handleChange}
                  rows="4"
                  id="form-message"
                  required
                ></textarea>
            
              </div>
            
              <div class="p-t-10">
              <p id="btn-form">
                <input
                  onClick={this.successMessage}
                  type="submit"
                  name="submit"
                  className="btn btn--pill btn--green"
                />
              </p>
              </div>
              <br />
            </form>
          </div>
        </div>
        </div>
      {/* </section> */}
      </div>
      </div>
      </div>
    );

}
}

export default Contact;