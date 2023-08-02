import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css'

const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className="gpt3__whatgpt3-feature">

                {/* Using the FEATURE component */}

                <Feature title="What is GPT-3" text="GPT-3 stands for Generative Pre-trained Transformer 3, which is a large language model released by OpenAI in 2020.It is a neural network machine learning model that can take input text and transform it into what it predicts to be the most likely next words or phrases.GPT-3 is trained using internet data to generate any type of text, and it requires only a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text" />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className='gradient__text'>The Possibilities are Beyond your Imagination</h1>
                <p>Explore the Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">

                {/* Using the FEATURE component */}

                <Feature title="Chatbots" text="GPT-3 chatbots are programmable artificial intelligence applications built on development work by OpenAPI and powered by the GPT-3 language model." />

                <Feature title="Knowledgebase" text="The knowledge base of GPT-3 is sourced from an online training dataset that is used to generate natural conversation with customers.e" />

                <Feature title="Education" text="GPT-3 can be used to solve many problems in the education sector, such as improving the quality of education by reducing the time needed to solve problems" />
            </div>
        </div>
    )
}

export default WhatGPT3