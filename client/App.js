import React, { Component } from 'react';
import { workExperience, technicalSkills, education, courses, projects, contactInfo, social, about } from './items';

import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import About from './components/about/About';
import TechSkills from './components/techSkills/TechSkills';
import Work from './components/work/Work';
import Education from './components/education/Education';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            navOpen: false,
            navButton: 'fa fa-bars fa-2x',
            arrOfElements: ["renderTarget", "about", "skills", "portfolio", "experience", "education", "contact"]
        };

        this.pageClick = this.pageClick.bind(this);
        this.handleResizeOrScroll = this.handleResizeOrScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleResizeOrScroll);
        window.addEventListener('resize', this.handleResizeOrScroll);
        window.addEventListener('mousedown', this.pageClick, false);

        // get the positions of elements in relation to window
        const positions = this.state.arrOfElements.map(elem => this.getPosition(elem));
        this.setState({ positions });
    }

    componentWillUnmount() {
        window.removeEventListener('mousedown', this.pageClick, false);
        window.removeEventListener('scroll', this.handleResizeOrScroll);
        window.removeEventListener('resize', this.handleResizeOrScroll);
    }

    // every time window is resized or scrolled find the new positions of elements in relation to window
    handleResizeOrScroll(event) {
        const positions = this.state.arrOfElements.map(elem => this.getPosition(elem));
        this.setState({ positions });
    }

    // this function will find the positions of elements in relationship to the window
    getPosition(elementId) {
        const fulElement = document.getElementById(elementId)
        const viewportOffset = fulElement.getBoundingClientRect();
        const yPos = viewportOffset.top;
        return { yPos, elementId };
    }

    // this function will open and close small screen navigation
    toggleNav() {
        this.setState({
            navOpen: !this.state.navOpen
        });
        this.state.navOpen ? this.setState({navButton: 'fa fa-bars fa-2x'}) : this.setState({navButton: 'fa fa-times fa-2x'});
    }

    // this function will close the menu once user selects an item
    // (function is not responsible for navigation)
    navButtonClicked() {
        this.setState({
            navOpen: false,
            navButton: 'fa fa-bars fa-2x'
        });
    }

    // this function will close the small screen menu when tapped anywhere on the body
    pageClick(e) {
        if (e.target.className === 'navigationLink' || e.target.className === 'fa fa-bars fa-2x' || e.target.className === 'fa fa-times fa-2x') {
            return
        }
        this.setState({
            navOpen: false,
            navButton: 'fa fa-bars fa-2x'
        });
    }

    //this function will find the closeset menu item to the window (thus active menu item)
    getActiveMenuItem() {
        return this.state.positions.reduce((prev, curr) => {
            if (prev.yPos === undefined) {
                return curr;
            }
            if (Math.abs(curr.yPos) < Math.abs(prev.yPos)) {
                return curr;
            }
            return prev;
        }, {});
    }

    render() {
        let activeItem = '';
        // if positions exist, find active menu item
        if (this.state.positions) {
            activeItem = this.getActiveMenuItem();
        }

        return <div>
            <Navigation
                toggleNav={this.toggleNav.bind(this)}
                navOpen={this.state.navOpen}
                navButton={this.state.navButton}
                navButtonClicked={this.navButtonClicked.bind(this)}
                activeItem={activeItem.elementId}
            />
            <Header name={about.name.toUpperCase()} slogan={about.slogan} />
            <About about={about} />
            <TechSkills techSkills={technicalSkills} />
            <Portfolio projects={projects} />
            <Work workExperience={workExperience} />
            <Education education={education} courses={courses} />
            <Footer social={social} contactInfo={contactInfo} />
        </div>;
    }
}

export default App;