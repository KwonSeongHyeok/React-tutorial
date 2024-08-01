import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    return(
        <nav>
            <ul>
                <li><Link to='/userlist'>유저목록</Link></li>
                <li><Link to='/todolist'>할일목록</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;