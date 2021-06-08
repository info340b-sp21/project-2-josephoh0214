import React, { useEffect, useState } from 'react';
import { RenderLogin } from './SignIn';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavLink, Redirect } from 'react-router-dom';
import { Card } from './CardView';

export function Favorites(props) {
    const { setFavState, dataset, isLoggedIn } = props;


    const [favorites, setFavorites] = useState([]);
    let drinks = dataset;



    const user = firebase.auth().currentUser;
    let displayName = 'intended';
    if (user) displayName = user.displayName;
    const favorite = firebase.database().ref(displayName);

    useEffect(() => {
        favorite.on('value', (snapshot) => {
            const favValue = snapshot.val();
            setFavorites(favValue);
        });
    }, []);

    if (!isLoggedIn) {
        return (
            <Redirect to="/account" />
        );
    }

    const favoriteDrinks = favorites.favorites;
    let cards = [];
    if (favoriteDrinks) {
        cards = drinks.filter((drink) => {
            return favoriteDrinks.indexOf(drink.name) !== -1;
        }).map((drink) => {
            return <Card fav={props.fav} theDrink={drink} key={drink.name} />
        });

    }

    if (user != null) {
        return (
            <div>
                <h2 className="favList">{user.displayName}'s Personal Favorites</h2>
                <div className="container">
                    {cards}
                </div>
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