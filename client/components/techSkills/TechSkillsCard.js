import React from 'react';
import { Link } from 'react-router';

export default (props) => {
    const {image, name, description, url} = props.item;
    return <a target="_blank" href={url}>
        <div className="techSkillsCard">
            <img src={`../../.${image}`} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    </a>;
};