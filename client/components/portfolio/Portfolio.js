import React, { Component } from 'react';

import ProjectsCard from './ProjectsCard';

export default class Portfolio extends Component {
    constructor() {
        super();
        this.state = {
            isMouseOverItem: ''
        }
    }
    onEnter(item) {
        this.setState({isMouseOverItem: item});
    }
    render() {
        return <section className='site-wrapper portfolio' id="portfolio">
            <h1>PORTFOLIO</h1>
            <p>Showcase of my latest works</p>
            <div className="portfolioCardWrapper">
                {this.props.projects.map(item => (
                    <div className="singlePortCardWrapper"
                        key={item.id}
                        onMouseEnter={this.onEnter.bind(this, item.id)}
                        onMouseLeave={()=> this.setState({isMouseOverItem: ''})}
                    >
                        <ProjectsCard item={item} isMouseOverItem={this.state.isMouseOverItem} />
                    </div>
                    )
                )}
            </div>
        </section>
    }
}