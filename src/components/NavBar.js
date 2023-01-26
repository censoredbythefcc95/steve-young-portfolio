import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar'>
            <NavLink className='name' to="/">Steven Astudillo</NavLink>
            <NavLink className='about' to="/about">About</NavLink>
            <NavLink className='projects' to="/projects">Projects</NavLink>
            <NavLink className='references' to='/references'>References</NavLink>
            <NavLink className='contact' to='/contact'>Contact</NavLink>
        </div>
    );
};

export default NavBar;