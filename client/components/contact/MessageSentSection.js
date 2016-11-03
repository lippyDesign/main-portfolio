import React from 'react';

export default (props) => <div className="messageSentSection">
    <h2>Message Sent</h2>
    <button onClick={props.showContactForm}>Send another Message?</button>
</div>