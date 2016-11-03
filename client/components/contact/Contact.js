import React, { Component } from 'react';

class Contact extends Component {

    beautifyNumber(number) {
        const arr = number.toString().split("");
        arr.splice(0, 0, "(");
        arr.splice(4, 0, ")", " ");
        arr.splice(9, 0, "-");
        return arr.join("");
    }
    
    render() {
        const {name, city, phone, email} = this.props.contactInfo;

        return <div className='site-wrapper contact' id="contact">
            <h1>GET IN TOUCH</h1>
            <p>Please feel free if you would like to have a chat.</p>
            <div>
                <aside>
                    <p><i className="fa fa-user" aria-hidden="true"></i> {name}</p>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i> {city}</p>
                    <p><a href={`tel:${phone}`}><i className="fa fa-phone" aria-hidden="true"></i> {this.beautifyNumber(phone)}</a></p>
                    <p><a href={`mailto:${email}`}><i className="fa fa-envelope" aria-hidden="true"></i> {email}</a></p>
                </aside>
                <form name="contactForm">
                    <input placeholder="Your name" ref="name"/>
                    <input placeholder="Your email" ref="email"/>
                    <textarea placeholder="Your Message" ref="message"></textarea>
                    <button><i className="fa fa-paper-plane"></i> Send Message</button>
                </form>
            </div>
        </div>
    }
}

export default Contact;