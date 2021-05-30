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
    if (window.innerWidth <= 768) {
        return (
            <div className="mobile">
                <a href="#" className="close-mobile-nav">&times;</a>
                <ul class="mobile-nav">
                    <li className="mobile-nav-items"><a href="">Main</a></li>
                    <li className="mobile-nav-items"><a href="">About</a></li>
                </ul>
            </div>
        );
    } else {
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
            <button aria-label="Search"><i className="fas fa-search"></i></button>
        </div>
    );
}