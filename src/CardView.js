import { SearchBox } from "./Header";

export function CardView(props) {
    const { dataset, sortingCategory, isAscending, filterType } = props;
    let drinks = dataset;

    if (filterType !== "All") {
        drinks = drinks.filter(drink => {
            return drink.type === filterType;
        })
    } else {
        drinks = dataset;
    }

    if (sortingCategory !== "") {
        drinks.sort((a, b) => {
            if (isAscending) {
                return parseInt(a[sortingCategory]) - parseInt(b[sortingCategory]);
            } else {
                return parseInt(b[sortingCategory]) - parseInt(a[sortingCategory]);
            }  
        });
    }

    const cards = drinks.map((drink) => {
        return <Card theDrink={drink} key={drink.name} />
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
