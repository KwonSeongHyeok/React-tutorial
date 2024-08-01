import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserList from "./UserList";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

function App() {

    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path='/userlist' element={<UserList />} />
                <Route path='/todolist' element={<TodoList />} />
            </Routes>
        </Router>
    );
}
export default App;