import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Redirect } from 'react-router-dom';
import { Card } from './CardView';

export function Favorites(props) {
    const {dataset} = props;
    let drinks = dataset;

    const [favorites, setFavorites] = useState([]);

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

    if (user != null) {
        if (favorites === null) {
            return (
                <div>
                    <h2>No drinks are added!</h2>
                </div>
            );
        } else {
            
            const favoriteDrinks = favorites.favorites;
            
            let cards = [];
            if (favoriteDrinks) {
                cards = drinks.filter((drink) => {
                    return favoriteDrinks.indexOf(drink.name) !== -1;
                }).map((drink) => {
                    return <Card fav={props.fav} theDrink={drink} key={drink.name} />
                });

            }
            return (
                <div>
                    <h2 className="favList">{user.displayName}'s Personal Favorites</h2>
                    <div className="container">
                        {cards}
                    </div>
                </div>
            );
        }
    } else {
        return (
            <Redirect to="/account" />
        );
    }
}