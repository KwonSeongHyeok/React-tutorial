import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <ul>
                {/*
                HTML에서는 <li><a href="/">Home</a></li> 작성했다면
                React에서는 <li><Link to="/">Home</Link></li>
                a가 Link와 같고
                href가 to와 같음
                */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contect">Contect</Link></li>
            </ul>

        </nav>
    )
}
export default Navbar;