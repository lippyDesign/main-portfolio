import React from 'react';
import { browserHistory, Link } from 'react-router';

export default (props) => {
    const navVisibleOrNot = props.navOpen ? '' : 'displayNone';

    let activeItem = props.activeItem;
    if (activeItem === 'renderTarget') {
        activeItem = 'home';
    }
    // var x = document.getElementsByClassName('navigationLink');
    // const arr = [...x]
    // arr.forEach(item => {
    //     if (item.innerText.toLowerCase() === activeItem) {
    //         //console.log(item)
    //         var z = item.parentNode;
    //         z.innerHTML = `<li><a className="navigationLink" href="#${activeItem}"><span className="activeWrapper"><i className="fa fa-circle" aria-hidden="true"></i></span> ${activeItem.toUpperCase()}</a></li>`
    //     }
    // });

    return <nav id="fixedNavi">
        <ul className="navigationList">
            <li><a className="navigationLink" href="#renderTarget">HOME</a></li>
            <li><a className="navigationLink" href="#about">ABOUT</a></li>
            <li><a className="navigationLink" href="#skills">SKILLS</a></li>
            <li><a className="navigationLink" href="#portfolio">PORTFOLIO</a></li>
            <li><a className="navigationLink" href="#experience">EXPERIENCE</a></li>
            <li><a className="navigationLink" href="#education">EDUCATION</a></li>
            <li><a className="navigationLink" href="#contact">CONTACT</a></li>
        </ul>
        <ul className="navigationListSmall">
            <li className="navigationButtonLi">
                <strong>
                    <a className="navigationLink" href="#renderTarget" onClick={props.navButtonClicked}>Vladimir Lipunov</a>
                </strong>
                <button className="navigationButton" onClick={props.toggleNav}>
                    <i className={props.navButton}></i>
                </button>
            </li>
            <li className={navVisibleOrNot}>
                <a className="navigationLink" href="#renderTarget" onClick={props.navButtonClicked}>HOME</a>
            </li>
            <li className={navVisibleOrNot}>
                <a className="navigationLink" href="#about" onClick={props.navButtonClicked}><span className="activeWrapper"><i className="fa fa-circle" aria-hidden="true"></i></span> ABOUT <span className="activeWrapper"><i className="fa fa-circle" aria-hidden="true"></i></span></a>
            </li>
            <li className={navVisibleOrNot}>
                <a className="navigationLink" href="#skills" onClick={props.navButtonClicked}>SKILLS</a>
            </li>
            <li className={navVisibleOrNot}>
                <a className="navigationLink" href="#portfolio" onClick={props.navButtonClicked}>PORTFOLIO</a>
            </li>
            <li className={navVisibleOrNot}>
                <a className="navigationLink" href="#experience" onClick={props.navButtonClicked}>EXPERIENCE</a>
            </li>
            <li className={navVisibleOrNot}>
                <a className="navigationLink" href="#education" onClick={props.navButtonClicked}>EDUCATION</a>
            </li>
            <li className={navVisibleOrNot}>
                <a className="navigationLink" href="#contact" onClick={props.navButtonClicked}>CONTACT</a>
            </li>
        </ul>
    </nav>;
};