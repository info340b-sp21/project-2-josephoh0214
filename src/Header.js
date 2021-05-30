export function Header() {
    return (
        <div>
            <nav>
                <NavBar />
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