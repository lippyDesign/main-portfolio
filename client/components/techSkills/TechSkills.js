import React from 'react';
import TechSkillsCard from './TechSkillsCard';

export default (props) => <section className='site-wrapper techSkills' id="skills">
    <h1>TECHNICAL SKILLS</h1>
    <p>Some of the technologies I know</p>
    <div className="techSkillsCardsWrapper">
        {props.techSkills.map(item => <TechSkillsCard key={`techSkills${item.name}`} item={item} />)}
    </div>
</section>;