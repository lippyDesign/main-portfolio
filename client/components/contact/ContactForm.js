import React, { Component } from 'react';

export default class ContactForm extends Component {
    render() {
        return <form onSubmit={this.props.contactUsTapped}>
            <input placeholder="Your name" ref="name"/>
            <input placeholder="Your email" ref="email"/>
            <textarea placeholder="Your Message" ref="message"></textarea>
            <p className="helperMessage"><strong>{this.props.helperMessage}</strong></p>
            <button><i className="fa fa-paper-plane"></i> Send Message</button>
        </form>;
    }
}