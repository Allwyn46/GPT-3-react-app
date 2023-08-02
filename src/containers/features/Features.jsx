import React from 'react';
import { Feature } from '../../components';
import './features.css';
import featuresData from './featuresdata';
import { RiArrowDropRightFill } from 'react-icons/ri';

const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className="gpt3__features-heading">
                <h1 className='gradient__text'>The Future is Now and <br />You Just Need to
                    Realize <br />It.Step into Future Today <br />& Make it Happen</h1>
                <p>Request Early Access and Get Started</p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features