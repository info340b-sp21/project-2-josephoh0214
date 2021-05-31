export function MobileDropDownMenu() {
    const handleChange = () => {
        let toggle = document.querySelector(".interactiveSections");
        if (toggle.style.display == "none") {
            toggle.style.display = "flex";
        } else {
            toggle.style.display = "none";
        }
    }
    return (
        <div className="mobile-dropdown">
            <button id="dropbtn" aria-label="Toggle display for filtering and sorting options" onClick={handleChange}>Categories / Sort
                By</button>
        </div>
    );
}