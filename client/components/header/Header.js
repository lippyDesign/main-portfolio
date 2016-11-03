import React from 'react';

export default (props) => {
    const { name, slogan } = props;
    return <header className='site-wrapper header'>
        <div>
            <h1>{name}</h1>
            <h2>{slogan}</h2>
        </div>
    </header>
}