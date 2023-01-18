import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <Link className='name' to="/">Steven Astudillo</Link>
            <Link className='home' to="/">Home</Link>
            <Link className='about' to="/about">About</Link>
            <Link className='contact' to="/contact">Contact</Link>
            <Link className='my-work' to="/mywork">My Work</Link>
        </div>
    );
};

export default NavBar;