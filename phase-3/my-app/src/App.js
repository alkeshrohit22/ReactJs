import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes, Link, Router } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';

import { auth } from "./firebase";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import ListUser from "./components/ListUser";

function App() {

    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName);
                setUserEmail(user.email);
            } else {
                setUserEmail("");
                setUserName("");
            }
        });
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/Home'} element={<Home name={userName} email={userEmail} />} />
                    <Route path={'/Login'} element={<Login />} />
                    <Route index element={<SignUp />} />
                    <Route path={'/create'} element={<CreateUser />} />
                    <Route path={"Home/:id/edit"} element={<EditUser />} />
                    <Route path={"/list"} element={<ListUser />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
