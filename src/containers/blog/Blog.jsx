import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog1, blog2, blog3, blog4, blog5 } from './imports'

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding'>
            <div className="gpt3__blog-heading">
                <h1 className='gradient__text'>A lot is happening,<br />
                    We are blogging about it</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog1} date="Jul 23 2023" title="Why A GPT-3 Content Generator is a Must-Have for Marketing?" />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog2} date="Jun 12 2023" title="What is GPT-3? Everything You Need to Know?" />
                    <Article imgUrl={blog3} date="Apr 02 2023" title="How GPT-3 Can Revolutionize Content Creation in Your Startup?" />
                    <Article imgUrl={blog4} date="Feb 16 2023" title="Top 10 GPT-3 Tools Easing Content Creation Work in 2023" />
                    <Article imgUrl={blog5} date="Jan 06 2023" title="GPT-3 Powers the Next Generation of Apps: Over 300 Applications Delivering Advanced AI Features" />
                </div>
            </div>
        </div>
    )
}

export default Blog