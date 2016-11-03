import React from 'react';

export default (props) => {
    const {name, facility, date, description} = props.item;
    return <div className="workCardWrapper">
        <div className='workDate'>
            <div className='workDateInner'>
                <p>{date}</p>
            </div>
        </div>
        <div className='workContent'>
            <i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
            <div className="upArrowWrapper">
            <i className="fa fa-angle-up fa-3x" aria-hidden="true"></i>
            </div>
            <h2>{name}</h2>
            <h3>{facility}</h3>
            <p>{description}</p>
        </div>
    </div>;
};