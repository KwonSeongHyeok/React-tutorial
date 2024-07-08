import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    return(
        <nav>
            <ul>
                <li><Link to="/Main">Main</Link> </li>
                <li><Link to="/todoList">To Do List</Link> </li>

            </ul>
        </nav>
    )
}
export default Navbar;