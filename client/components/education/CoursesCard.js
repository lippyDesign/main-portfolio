import React from 'react';

export default (props) => {
    const {name, platform, year} = props.item;
    return <div className="workCardWrapper">
        <div className='workDate' id="workDateItem">
            <div className='workDateInner' id="workInnerItem">
                <p>{year}</p>
            </div>
        </div>
        <div className='workContent'>
                <i id="courseLeftArrow" className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
            <div className="upArrowWrapper">
                <i id="courseUpArrow" className="fa fa-angle-up fa-3x" aria-hidden="true"></i>
            </div>
            <h2>{name}</h2>
            <h3 className="courseHeaderThree">{platform}</h3>
        </div>
    </div>;
};