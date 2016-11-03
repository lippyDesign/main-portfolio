import React from 'react';

import Contact from '../contact/Contact';
import Social from '../social/Social';

export default (props) => {
    return <footer>
        <Contact contactInfo={props.contactInfo} />
        <Social social={props.social} />
    </footer>
}