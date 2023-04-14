import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/ListUser.css';

import {auth} from "../firebase";

function ListUser() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios
            .get('http://localhost:80/ReactJs/phase-3/my-app-backend/index.php')
            .then(function (response) {
                if (Array.isArray(response.data)) {
                    setContacts(response.data);
                } else {
                    console.error('API response is not an array:', response.data);
                }
            })
            .catch(function (error) {
                console.error('Failed to fetch contacts:', error);
            });
    }

    const deleteContact = (id) => {
        const valid = window.confirm('Sure! Want to Delete ?');
        if(valid) {
            axios
                .delete(`http://localhost:80/ReactJs/phase-3/my-app-backend/index.php/${id}/delete`)
                .then(function (response) {
                    getUsers();
                });
        } else {
            getUsers();
        }
    }

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                // Log out successful
                console.log("Logged out successfully");
            })
            .catch((error) => {
                // An error occurred
                console.error("Error logging out:", error);
            });
    };

    return (
        <div className="list-user-container">
            <div className={'logout-button-div'}><button onClick={handleLogout}>Logout</button></div>
            <h2>List User</h2>
            <div className="table-container">
                <table className="user-table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Mobile No</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((user, key) => (
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.mobile}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`${user.id}/edit`} className="edit-link">Edit</Link>
                                <button onClick={() => deleteContact(user.id)} className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListUser;
