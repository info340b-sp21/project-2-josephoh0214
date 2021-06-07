import React from 'react';
import { NavLink } from 'react-router-dom';


export function Header(prop) {
    return (
        <div>
            <nav>
                <NavBar />
                <Account />
            </nav>
            <header>
                <Title />
            </header>
        </div>
    );
}

// Creates a navigation bar that routes to different contents
export function NavBar() {
    return (
        <div className="navbar">
            <div id="pages">
                <NavLink exact to="/" activeClassName="active">Main</NavLink>
                <NavLink exact to="/favorites" activeClassName="active">Favorites</NavLink>
                <NavLink exact to="/about" activeClassName="active">About</NavLink>
            </div>

        </div>
    );
}

// Navigates the users to the login/logout page
export function Account() {
    return (
        <div>
            <NavLink exact to="/account" activeClassName="active">
                <button id="userIcon" aria-label="Account Page"><i className="fas fa-user"></i></button>
            </NavLink>
        </div>
    );
}

export function Title() {
    return (
        <h1>
            All About Your Starbucks Drinks
        </h1>
    );
}