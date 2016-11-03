import React from 'react';

const mapList = list => {
    return list.reduce((previousValue, currentValue, currentIndex) => {
        if (currentIndex + 1 === list.length) {
            return `${previousValue} and ${currentValue}`;
        }
        if (previousValue.length === 0) {
            return currentValue;
        }
        return `${previousValue}, ${currentValue}`;
    }, '');
}

export default (props) => {
    const {title, technology, url, img, description, id} = props.item;

    const isMouseOver = props.isMouseOverItem === id ? 'showPortfolioDescription' : 'hidePortfolioDescription';

    return <a target="_blank" href={url} >
        <figure className="portfolioFigure">
            <img src={`../../.${img}`} alt={title} />
            <figcaption>
                <h1>{title.toUpperCase()}</h1>
            </figcaption>
            <div className={`portfolioCardDescription ${isMouseOver}`}>
                <h1>{title}</h1>
                <p>{description}</p>
                <p>{`Built with: ${mapList(technology)}`}</p>
            </div>
        </figure>
    </a>;
};