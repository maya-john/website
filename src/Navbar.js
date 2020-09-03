import React from "react";
import {Link, NavLink} from "react-router-dom";
import { RiLinkedinBoxFill, RiGithubFill, RiTwitterFill } from "react-icons/ri";
import Monitor from './monitor.png';

const Navbar = () => {
    return (
        <nav className='nav-wrapper grey darken-4'>
            <div className='container'>
                <Link to='/' className='brand-logo center icon'><img src={Monitor}/></Link>
                <ul className='left'>
                    <li><NavLink to='/about' className='grey-text lighten-2'>about</NavLink></li>
                    <li><NavLink to='/projects' className='grey-text lighten-2'>projects</NavLink></li>
                    {/*<li><NavLink to='/contact' className='grey-text lighten-2'>contact</NavLink></li>*/}
                </ul>
                <ul className='right hide-on-med-and-down'>
                    <li><a href='https://github.com/maya-john' target='_blank'><RiGithubFill size={25} style={{ fill: '#9e9e9e' }}/></a></li>
                    <li><a href='https://twitter.com/maya_john_john' target='_blank'><RiTwitterFill size={25} style={{ fill: '#9e9e9e' }}/></a></li>
                    <li><a href='https://www.linkedin.com/in/maya-a-john/' target='_blank'><RiLinkedinBoxFill size={25} style={{ fill: '#9e9e9e' }}/></a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;