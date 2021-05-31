import { CardView } from './CardView';
import { useState } from 'react';


export function ModifyData(props) {
    let dataset = props.dataset;

    return (
        <div className="column-layout">
            <div className="interactiveSections">
                <Filtering />
                <Sorting />
            </div>
            <CardView searchInput={""} dataset={dataset} />
        </div>
    );
}

export function Filtering() {
    const handleChange = (event) => {
        let selected = event.target.value;
        return console.log(selected);
    }
    return (
        <section className="filter-section">
            <h2>Categories</h2>
            <form>
                <select className="category" name="filter" onChange={type => handleChange(type)}>
                    <option defaultValue="All">All</option>
                    <option value="Hot_coffee">Hot coffees</option>
                    <option value="Hot_tea">Hot Teas</option>
                    <option value="Hot_drink">Hot Drinks</option>
                    <option value="Frappuccino">Frappuccino</option>
                    <option value="Cold_coffee">Cold Coffees</option>
                    <option value="Cold_teas">Iced Teas</option>
                    <option value="Cold_drinks">Cold Drinks</option>
                </select>
            </form>
        </section>
    );
}

export function Sorting() {
    const handleChange = (event) => {
        let selected = event.target.value;
        return console.log(selected);
    }
    return (
        <section className="sortBy-section">
            <h2>Sort By</h2>
            <form className="sortOptions" onChange={sort => handleChange(sort)}>
                <input type="radio" name="sortOrder" value="caloriesHigh"
                    aria-label="Calories from high to low" />Calories ▼<br />
                <input type="radio" name="sortOrder" value="caloriesLow"
                    aria-label="Calories from low to high" />Calories ▲<br />
                <input type="radio" name="sortOrder" value="caffieneHigh"
                    aria-label="Caffeine from high to low" />Caffiene ▼<br />
                <input type="radio" name="sortOrder" value="caffieneLow"
                    aria-label="Caffeine from low to high" />Caffiene ▲<br />
                <input type="radio" name="sortOrder" value="proteinHigh"
                    aria-label="Protein from high to low" />Protein ▼<br />
                <input type="radio" name="sortOrder" value="proteinLow"
                    aria-label="Protein from low to high" />Protein ▲<br />
            </form>
        </section>
    );
}