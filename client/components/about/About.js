import React from 'react';

export default (props) => {
    const { name, statement, details } = props.about;
    return <section className='site-wrapper about' id="about">
        <h1>ABOUT ME</h1>
        <p className="textCenter">A small introduction about myself</p>
        <div>
            <img src='../../../images/facePic.jpg' alt={name} />
            <h2>{name}</h2>
            <h3>{statement}</h3>
            <p>{details}</p>
        </div>
        <a className="bntDownload button" download="" href="resume.docx" hidden="">Download Printable Resume</a>
    </section>
}