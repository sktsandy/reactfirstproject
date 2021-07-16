import React from 'react';
import {  NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(
        <>

<div className="header">
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
        <NavLink className="nav-brand" to="/"> Tech WebArt </NavLink>
             
    <div className="navbar_custom">
        <ul className="navbar-nav">
            <li className="nav-item nav_li">
                <NavLink exact activeClassName="a_active" className="nav_link_a" to="/"> Home </NavLink>
            </li>

                <li className="nav-item nav_li">
                    <NavLink exact activeClassName="a_active" className="nav_link_a" to="/Services"> Services </NavLink>
                </li>

                    <li className="nav-item nav_li">
                        <NavLink exact  activeClassName="a_active" className="nav_link_a" to="/About"> About </NavLink>
                        </li>

                <li className="nav-item nav_li">
                    <NavLink exact activeClassName="a_active" className="nav_link_a" to="/Contact"> Contact Us </NavLink>
                </li>
            </ul>
    </div>
      
        </nav>
    </div>
</div>
        </>
    );

}


export default Navbar;