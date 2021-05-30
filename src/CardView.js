export function CardView(props) {
    let dataset = props.dataset;
    return (
        <section className="result-section">
            <h2>Drinks (Grande)</h2>
            <div className="container">
                <CardList dataset={dataset} />
            </div>
        </section>
    );
}

export function Card(props) {
    let drink = props.theDrink;
    let drinkName = drink.name.replaceAll('_', " ");
    return (
        <div className="card">
            <img src="./img/Hot_coffee-Cappuccino.webp" alt={drinkName} />
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
    let dataset = props.dataset;
    let cards = dataset.map((drink) => {
        return <Card theDrink={drink} key={drink.name} />
    });
    return (
        <div>
            {cards}
        </div>
    );
}