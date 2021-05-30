export function CardView() {
    return (
        <section className="result-section">
            <h2>Drinks (Grande)</h2>
            <div className="container">
                <Card />
            </div>
        </section>
    );
}

export function Card() {
    return (
        <div className="card">
            <img src="./img/Hot_coffee-Cappuccino.webp" alt="hot cappuccino" />
            <h3>Cappuccino</h3>
            <ul>
                <li>Calories: 120</li>
                <li>Caffeine(g): 150</li>
                <li>Protein(g): 8</li>
            </ul>
        </div>
    );
}