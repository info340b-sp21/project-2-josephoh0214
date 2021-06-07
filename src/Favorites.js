import React from 'react';
import { RenderLogin } from './SignIn';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavLink } from 'react-router-dom';

export function Favorites() {
    const user = firebase.auth().currentUser;
    // checks if the user is logged in
    if (user != null) {
        return (
            <div>
                <h2>{user.displayName}'s Personal Favorites</h2>
            </div>
        );
    } else {
        return (
            <div>
                <h2><NavLink exact to="/account">Click here to log in first.</NavLink></h2>
            </div>
        );
    }
}