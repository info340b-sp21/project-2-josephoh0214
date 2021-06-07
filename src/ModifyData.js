import React from 'react';
import { CardView } from './CardView';
import { useState } from 'react';

// provides users with filtering/sorting options 
export function ModifyData(props) {
    const dataset = props.dataset;
    const [sortingCategory, setSortingCategory] = useState('');
    const [isAscending, setIsAscending] = useState(true);
    const [filterType, setFilterType] = useState('All');

    return (
        <div className="column-layout">
            <div className="interactiveSections">
                <Categories dataset={dataset} setFilterType={setFilterType} />
                <Sorting setSortingCategory={setSortingCategory} setIsAscending={setIsAscending} />
            </div>
            <CardView dataset={dataset} sortingCategory={sortingCategory} isAscending={isAscending} filterType={filterType} />
        </div>
    );
}

// Categories feature
export function Categories(props) {
    const { dataset, setFilterType } = props;

    const seen = new Set();
    let options = dataset.filter((drink) => {
        if (!seen.has(drink.type)) {
            seen.add(drink.type);

            return true;
        }
        return false;
    }).map((drink) => {
        const name = drink.type.split("_").map((name) => {
            return name.charAt(0).toUpperCase() + name.slice(1);
        }).join(" ");
        const option = <option value={drink.type}>{name}</option>
        return option;
    });

    const [category, setCategory] = useState('All');

    return (
        <section className="filter-section">
            <h2>Categories</h2>
            <form>
                <select
                    className="category"
                    name="filter"
                    value={category}
                    onChange={(e) => {
                        const filterType = e.target.value
                        setCategory(filterType);
                        setFilterType(filterType);
                    }}
                >
                    <option value="All" defaultValue>All</option>
                    {options}
                </select>
            </form>
        </section>
    );
}

// Sort By feature
export function Sorting(props) {
    const { setSortingCategory, setIsAscending } = props;

    const onSortOptionChange = (e) => {
        setSortingCategory(e.target.value);
    }

    const onSortOrderChange = (e) => {
        const isAsc = String(e.target.value).toLowerCase() === "true";
        setIsAscending(isAsc);
    }

    return (
        <section className="sortBy-section">
            <h2>Sort By</h2>
            <form className="sortOptions">
                <input type="radio" name="sortOrder" value="calories" onChange={onSortOptionChange}
                    aria-label="Calories" />Calories <br />
                <input type="radio" name="sortOrder" value="caffeine" onChange={onSortOptionChange}
                    aria-label="Caffeine" />Caffiene<br />
                <input type="radio" name="sortOrder" value="protein" onChange={onSortOptionChange}
                    aria-label="Protein" />Protein<br />
            </form>

            <form className="sortOptions">
                <input type="radio" name="sortOrder" value="true" onChange={onSortOrderChange}
                    aria-label="low to high" />▲
                <input type="radio" name="sortOrder" value="false" onChange={onSortOrderChange}
                    aria-label="high to low" />▼
            </form>
        </section>
    );
}