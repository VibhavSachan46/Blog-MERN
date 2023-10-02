import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const RegisterPage = () => {

    const port = "http://localhost:5000"

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)

    async function register(ev) {
        ev.preventDefault();
        const response = await fetch(`${port}/register`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-type': 'application/json' }
        })
        if (response.status === 200) {
            alert('registration successfull')
            setRedirect(true)
        } else {
            alert('registration failed')
        }
    }

    if (redirect) {
        return <Navigate to={'/login'} />
    }


    return (
        <form className="register" onSubmit={register}>
            <h1>Register Yourself</h1>
            <input
                type='text'
                placeholder='username'
                value={username}
                onChange={ev => setUsername(ev.target.value)}
            />
            <input
                type='password'
                placeholder='password'
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />
            <button>Register</button>
        </form>
    )
}

export default RegisterPage