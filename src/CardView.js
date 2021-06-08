import React from 'react';
import firebase from 'firebase/app';
import { useState } from 'react'

//Renders a list of cards
export function CardView(props) {
    const { dataset, sortingCategory, isAscending, filterType } = props;
    let drinks = dataset;

    // Filtering feature
    if (filterType !== "All") {
        drinks = drinks.filter(drink => {
            return drink.type === filterType;
        })
    } else {
        drinks = dataset;
    }

    // Sorting feature
    if (sortingCategory !== "") {
        drinks.sort((a, b) => {
            if (isAscending) {
                return parseInt(a[sortingCategory]) - parseInt(b[sortingCategory]);
            } else {
                return parseInt(b[sortingCategory]) - parseInt(a[sortingCategory]);
            }
        });
    }

    // Change to array of cards
    const cards = drinks.map((drink) => {
        return <Card fav={props.fav} theDrink={drink} key={drink.name} />
    });

    return (
        <section className="result-section">
            <h2>Drinks (Grande)</h2>
            <div className="container">
                {cards}
            </div>
        </section>
    );
}

// Generates cards
export function Card(props) {
    let drink = props.theDrink;

    let drinkName = drink.name.replaceAll('_', " ");
    let imgLocation = "img/" + drink.type + "-" + drink.name + ".webp";

    const user = firebase.auth().currentUser;

    const addFavorite = (e) => {
        e.preventDefault();
        const favorites = firebase.database().ref(user.displayName);

        const favList = props.fav;
        favList.push(drink.name);
        favorites.child('favorites').set(favList)
    }

    // Checks if a user is logged in to show/hide a button to add drinks to favorites
    if (user != null ) {
        // checks if a card is in favorites page and if it is add-to-favorite-button will be hidden
        if (props.added) {
            return (
                <div className="card">
                    <img src={imgLocation} alt={drinkName} />
                    <h3>{drinkName}</h3>
                    <ul>
                        <li>Calories: {drink.calories}</li>
                        <li>Caffeine(g): {drink.caffeine}</li>
                        <li>Protein(g): {drink.protein}</li>
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="card">
                    <img src={imgLocation} alt={drinkName} />
                    <h3>{drinkName}</h3>
                    <ul>
                        <li>Calories: {drink.calories}</li>
                        <li>Caffeine(g): {drink.caffeine}</li>
                        <li>Protein(g): {drink.protein}</li>
                        <button className="favButton" type='button' onClick={addFavorite} aria-label="Save this drink to personal list">
                            Add to Favorites
                    </button>
                    </ul>
                </div>
            )
        }
    } else {
        return (
            <div className="card">
                <img src={imgLocation} alt={drinkName} />
                <h3>{drinkName}</h3>
                <ul>
                    <li>Calories: {drink.calories}</li>
                    <li>Caffeine(g): {drink.caffeine}</li>
                    <li>Protein(g): {drink.protein}</li>
                </ul>
            </div>
        );
    }
}