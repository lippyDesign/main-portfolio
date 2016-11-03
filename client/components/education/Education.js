import React from 'react';

import EducationCard from './EducationCard';
import CoursesCard from './CoursesCard';

export default (props) => <section className='site-wrapper education' id="education">
    <h1>EDUCATION & DIPLOMAS</h1>
    <p>What I have done in my academic career</p>
    <div className="educationWrapper mainEducation">
        {props.education.map(item => <EducationCard key={`education${item.name}`} item={item} />)}
    </div>
    <h1 className="coursesHeader">COURSES & CERTIFICATES</h1>
    <p>How I further enhanced my academic knowledge</p>
    <div className="educationWrapper mainEducation">
        {props.courses.map(item => <CoursesCard key={`courses${item.name}`} item={item} />)}
    </div>
</section>;
