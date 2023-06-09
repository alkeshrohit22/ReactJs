import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListUser from "../ListUser";
import '../../css/Home.css'

function Home(props){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setName(props.name);
        setEmail(props.email)
    }, [props.name, props.email]);

    useEffect(() => {
        if (email  && name) {
            console.log("Data fetched after login");
        }
    }, [email, name]);

    return (
        <>
            <div className={'container'}>
                <div><h2>{email ? `Welcome   ${name}` : "Login please"}</h2></div>
                {!name &&
                    <div className={'container-auth-none'}>
                        <div>
                            <span>
                                <Link to={"/Login"}>Login</Link>
                            </span>&nbsp;
                            <span>
                                <Link to={"/"}>SignUp</Link>
                            </span>
                        </div>
                    </div>
                }
                {name && (
                    <div className={'container-auth'}>
                        <h1>React CRUD Operation using PHP API and ReactJs</h1>
                        <nav className="nav-menu">
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <Link to={"/create"} className="nav-link">Create Contact</Link>
                                </li>
                            </ul>
                        </nav>
                        <ListUser />
                    </div>
                )}
            </div>
        </>
    )
}

export default Home;
