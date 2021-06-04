import React, { useState } from 'react';
import { Collapse, Card } from 'reactstrap';

//Creates a mobile view of filtering/sorting section that drowps down
// export function MobileDropDownMenu() {
//     const handleChange = () => {
//         let toggle = document.querySelector(".interactiveSections");
//         if (toggle.style.display == "none") {
//             toggle.style.display = "flex";
//         } else {
//             toggle.style.display = "none";
//         }
//     }
//     return (
//         <div className="mobile-dropdown">
//             <button id="dropbtn" aria-label="Toggle display for filtering and sorting options" onClick={handleChange}>Categories / Sort
//                 By</button>
//         </div>
//     );
// }

export function Mobile(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="mobile-dropdown">
            <button id="dropbtn" aria-label="Toggle display for filtering and sorting options" onClick={toggle}>Categories / Sort
                By</button>
            <Collapse isOpen={isOpen}>
                <Card>asdf</Card>
            </Collapse>
        </div>
    );
}