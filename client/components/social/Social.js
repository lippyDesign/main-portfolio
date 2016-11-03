import React from 'react';
import SocialCard from './SocialCard';

export default (props) => <ul className='site-wrapper social'>
    {props.social.map(item => <SocialCard key={`socialCard${item.url}`} item={item} />)}
</ul>;