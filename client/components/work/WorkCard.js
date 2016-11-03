import React from 'react';

export default (props) => {
    const {name, title, startDate, endDate, description} = props.item;
    return <div className="workCardWrapper">
        <div className='workDate'>
            <div className='workDateInner'>
                <p>{startDate} -</p><p>{endDate}</p>
            </div>
        </div>
        <div className='workContent'>
            <i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
            <div className="upArrowWrapper">
            <i className="fa fa-angle-up fa-3x" aria-hidden="true"></i>
            </div>
            <h2>{name}</h2>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>;
};