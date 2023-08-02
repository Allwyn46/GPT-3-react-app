import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className="gpt3__header-content">
                <h1 className='gradient__text'>Let's Build Something <br />amazing with GPT-3 <br />OpenAI</h1>
                <p>GPT-3 is an advanced AI model developed by OpenAI that is capable of generating realistic human-like text.It can process text input and perform various natural language tasks, using both natural language generation and natural language processing.GPT-3 has been trained on a vast amount of internet text, allowing it to spot patterns and generate useful results</p>
                <div className="gpt3__header-content_input">
                    <input type="email" placeholder='Your Email Address' />
                    <button type='button'>Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested accessa visit in last 24 hours</p>
                </div>
            </div>
            <div className='gpt3__header-image'>
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header