export function Header() {
    return (
        <div>
            <nav>
                <NavBar />
                <SearchBox />
            </nav>
            <header>
                <Title />
            </header>
        </div>
    );
}

export function NavBar() {
    return (
        <div className="navbar">
            <div id="pages">
                <a className="active" href="">Main</a>
                <a href="">About</a>
            </div>
            <a><i id="hamburger" className="fa fa-bars fa-lg"></i></a>
        </div>
    );
}

export function Title() {
    return (
        <h1>All About Your Starbucks Drinks</h1>
    );
}

export function SearchBox() {
    return (
        <div className="searchBox" role="search">
            <input aria-label="drink name" type="text" placeholder="Search Your Drink!" />
            <button aria-label="Search"><i class="fas fa-search"></i></button>
        </div>
    );
}