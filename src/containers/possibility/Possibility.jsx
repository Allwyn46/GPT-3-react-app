import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className="gpt3__possibility-image">
                <img src={possibility} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>GPT-3's general language-based capabilities open the doors to building innovative products, especially in solving tasks such as text generation, text summarization, classification, and conversation. GPT-3 can help improve content quality by generating high-quality output and predicting the best and most useful results</p>
                <h4>Request Early Access</h4>
            </div>
        </div>
    )
}

export default Possibility