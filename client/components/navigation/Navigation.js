import React from 'react';
import { browserHistory, Link } from 'react-router';

export default (props) => {
    const navVisibleOrNot = props.navOpen ? '' : 'displayNone';

    // this function creates menu items for the large Menu
    const getMenuItems = array => {
        return array.map(current => {
            // if not active item
            if (current !== props.activeItem) {
                return <li key={current}>
                    <a className="navigationLink" href={`#${current}`}>
                        {current === 'renderTarget' ? 'HOME' : current.toUpperCase()}
                    </a>
                </li>;
            }
            // if active item
            return <li key={current}>
                <a className="navigationLink" href={`#${current}`}>
                    <span className="activeWrapper"><i className="fa fa-circle" aria-hidden="true"></i></span> {current === 'renderTarget' ? 'HOME' : current.toUpperCase()}
                </a>
            </li>;
        });
    }

    // this function creates menu items for the small Menu
    const getSmallMenuItems = array => {
        return array.map(current => {
            // if not active item
            if (current !== props.activeItem) {
                return <li key={current} className={navVisibleOrNot}>
                    <a className="navigationLink" href={`#${current}`} onClick={props.navButtonClicked}>
                        {current === 'renderTarget' ? 'HOME' : current.toUpperCase()}
                    </a>
                </li>;
            }
            // if active item
            return <li key={`smallMenu${current}`} className={navVisibleOrNot}>
                <a className="navigationLink" href={`#${current}`} onClick={props.navButtonClicked}>
                    <span className="activeWrapper"><i className="fa fa-circle" aria-hidden="true"></i></span> {current === 'renderTarget' ? 'HOME' : current.toUpperCase()} <span className="activeWrapper"><i className="fa fa-circle" aria-hidden="true"></i></span> 
                </a>
            </li>;
        });
    }

    return <nav id="fixedNavi">
        <ul className="navigationList">
            {getMenuItems(props.arrOfElements)}
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
            {getSmallMenuItems(props.arrOfElements)}
        </ul>
    </nav>;
};