import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header(prop) {
    return (
        <div>
            <nav>
                <NavBar />
            </nav>
            <header>
                <Title />
            </header>
        </div>
    );
}

//Creates a navigation bar that routes to different contents
export function NavBar() {
    if (window.innerWidth <= 768) {
        // Navigation bar for devices with smaller screens
        return (
            <div className="mobile">
                <a href="" className="close-mobile-nav" >&times;</a>
                <ul class="mobile-nav">
                    <li className="mobile-nav-items"><a href="">Main</a></li>
                    <li className="mobile-nav-items"><a href="">Favorites</a></li>
                    <li className="mobile-nav-items"><a href="">About</a></li>
                </ul>
            </div>
        );
    } else {
        return (
            <div className="navbar">
                <div id="pages">
                    <NavLink exact to="/" activeClassName="active">Main</NavLink>
                    <NavLink exact to="/favorites" activeClassName="active">Favorites</NavLink>
                    <NavLink exact to="/about" activeClassName="active">About</NavLink>
                </div>
                <a><i id="hamburger" className="fa fa-bars fa-lg"></i></a>
            </div>
        );
    }
}

export function Title() {
    return (
        <h1>All About Your Starbucks Drinks</h1>
    );
}