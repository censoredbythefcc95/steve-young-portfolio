import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <NavLink className='name' to="/">Steven Astudillo</NavLink>
            <NavLink className='home' to="/">Home</NavLink>
            <NavLink className='about' to="/about">About</NavLink>
            <NavLink className='contact' to="/contact">Contact</NavLink>
            <NavLink className='my-work' to="/mywork">My Work</NavLink>
        </div>
    );
};

export default NavBar;