import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className='about-page'>
            <h1>About Me</h1>
            <p>Hello, my name is [Your Name] and I am a software engineer with a passion for creating innovative and user-friendly applications. My goal is to use my skills and knowledge to improve the way people interact with technology and make a positive impact on their lives.</p>
            <p>I have experience with a variety of programming languages and frameworks, including [list relevant technologies]. I am always eager to learn new technologies and expand my skillset.</p>
            <p>Currently, I am working on several projects, including [list current projects]. My goal is to continue to develop my skills and deliver high-quality projects that meet the needs of my clients and users.</p>
            <Link to="/">Go back home</Link>
        </div>
    );
};

export default AboutPage;