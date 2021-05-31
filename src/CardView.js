import { SearchBox } from "./Header";

export function CardView(props) {
    let dataset = props.dataset;
    let input = props.searchInput;
    console.log(input);
    return (
        <section className="result-section">
            <h2>Drinks (Grande)</h2>
            <div className="container">
                <CardList searchInput={input} dataset={dataset} />
            </div>
        </section>
    );
}

export function Card(props) {
    let drink = props.theDrink;
    let drinkName = drink.name.replaceAll('_', " ");
    let imgLocation = "img/" + drink.type + "-" + drink.name + ".webp";
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

export function CardList(props) {
    const searchResult = (query) => {
       dataset = dataset.filter((drink) => {
            return drink.name.includes(query);
        }) 
    }
    <SearchBox callback={searchResult} />
    let dataset = props.dataset;
    let input = props.searchInput;
    console.log(dataset);
    console.log(input);
    let cards = dataset.map((drink) => {
        return <Card theDrink={drink} key={drink.name} />
    });

    return cards;
}