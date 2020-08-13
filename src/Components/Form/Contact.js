import React, { Component } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css"
import Form from 'react-bootstrap/Form';

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
    <div className="contact-section" id="contact">

<section id="contactme">
<h1 className="contact-title">Say Hello</h1>
<div className="wrapper-contact">
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
              <p>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  id="form-name"
                  required
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <span className="required">
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </p>
              <br />
              <p>
                <input
                  name="email"
                  type="email"
                  placeholder="E-mail Address"
                  id="form-email"
                  required
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <span className="required">
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </p>
              <br />
              <p>
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  id="form-subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
              </p>
              <p>
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
                <span className="required">
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </p>
              <br />
              <p id="btn-form">
                <input
                  onClick={this.successMessage}
                  type="submit"
                  name="submit"
                />
              </p>
              <br />
            </form>
          </div>
        </div>
      </section>
      </div>
    );

}
}

export default Contact;