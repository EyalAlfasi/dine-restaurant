import React, { useEffect, useState } from 'react';
import userService from './services/userService.js'

import React from 'react'

function App() {

    const [fullName, setFullName] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    loadUsers = async () => {
        const users = await userService.query()
        setUsers(users)
    }

    showName = () => {
        alert(fullName);
    };

    handleNameInput = e => {
        setFullName(e.target.value);
    };


    return (
        <div>
            <h3>This is a Class Component</h3>
            <h4>{users.length}</h4>
            <input
                type="text"
                onChange={handleNameInput}
                value={fullName}
                placeholder="Your Name"
            />
            <button onClick={showName}>
                Alert
        </button>
        </div>
    )
}
