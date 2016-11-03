import React, { Component } from 'react';

import ContactForm from './ContactForm';
import MessageSentSection from './MessageSentSection'

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            messageSent: false,
            helperMessage: ''
        }
    }

    beautifyNumber(number) {
        const arr = number.toString().split("");
        arr.splice(0, 0, "(");
        arr.splice(4, 0, ")", " ");
        arr.splice(9, 0, "-");
        return arr.join("");
    }

    contactUsTapped(e) {
        e.preventDefault();

        const name_of_user = this.refs.contactForm.refs.name.value.trim();
        const email_of_user = this.refs.contactForm.refs.email.value.trim();
        const message_content = this.refs.contactForm.refs.message.value.trim();

        // this function will validate the text fields
        const validation = (name, email, message) => {
            // check if some fields are empty
            if ([name, email, message].some(item => !item)) {
                return false;
            }
            // check if all entries were strings
            if (![name, email, message].every(item => typeof item === 'string')) {
                return false;
            }
            // check to see if valid email was provided
            const validChars = email.includes("@") && email.includes(".");
            const invalidChars = email.includes(" ");
            if (validChars && !invalidChars && email.length > 3) {
                return true;
            } else {
                return false;
            }
        }

        // if form passes validation
        if (validation(name_of_user, email_of_user, message_content)) {
            
            Meteor.call('sendEmail', 'wouldntyou@liketoknow.com', email_of_user, `${name_of_user} regarding CODE BY VOLO`, message_content);
            
            this.refs.contactForm.refs.name.value = '';
            this.refs.contactForm.refs.email.value = '';
            this.refs.contactForm.refs.message.value = '';

            this.setState({
                messageSent: true
            });
        } else {
            this.setState({
                helperMessage: 'Please make sure all of the fields are filld out correctly'
            })
        }
    }

    contactFormOrSentMessage() {
        if (this.state.messageSent) {
            return (
                <MessageSentSection showContactForm={() => this.setState({messageSent: false, helperMessage: ''})}/>
            );
        }
        return (
            <ContactForm
                ref="contactForm"
                contactUsTapped={this.contactUsTapped.bind(this)}
                helperMessage={this.state.helperMessage}
            />
        );
    }
    
    render() {
        const {name, city, phone, email} = this.props.contactInfo;
        const formOrSentMessage = this.state.messageSent
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
                {this.contactFormOrSentMessage()}
            </div>
        </div>
    }
}

export default Contact;