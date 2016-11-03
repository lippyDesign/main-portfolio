import React from 'react';

import WorkCard from './WorkCard';

export default (props) => <section className='site-wrapper workExperience' id="experience">
    <h1>WORK EXPERIENCE</h1>
    <p>My previous associations</p>
    <div className="workExperienceWrapper">
        {props.workExperience.map(item => <WorkCard key={`workExperience${item.name}`} item={item} />)}
    </div>
</section>