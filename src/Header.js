import { CardList } from './CardView'
import { useState } from 'react';

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

export function NavBar() {
    if (window.innerWidth <= 768) {
        // Navigation bar for devices with smaller screens
        return (
            <div className="mobile">
                <a href="" className="close-mobile-nav" >&times;</a>
                <ul class="mobile-nav">
                    <li className="mobile-nav-items"><a href="">Main</a></li>
                    <li className="mobile-nav-items"><a href="">About</a></li>
                </ul>
            </div>
        );
    } else {
        return (
            <div className="navbar">
                <div id="pages">
                    <a className="active" href="">Main</a>
                    <a href="">About</a>
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