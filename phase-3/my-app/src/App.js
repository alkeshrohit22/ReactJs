import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

function App() {
    return (
        <div className="App">
            <h1>React CRUD Operation using PHP API and ReactJs</h1>
            <BrowserRouter>
                <nav className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">List Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"create"} className="nav-link">Create Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="content">
                    <Routes>
                        <Route index element={<ListUser />}></Route>
                        <Route path={'create'} element={<CreateUser />}></Route>
                        <Route path={':id/edit'} element={<EditUser />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
