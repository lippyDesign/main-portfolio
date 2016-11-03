import React from 'react';
import { Link } from 'react-router';

export default (props) => {
    const {icon, url} = props.item;
    return <li>
        <a target="_blank" href={url}><i className={icon}></i></a>
    </li>;
};