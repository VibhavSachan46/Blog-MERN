import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../userContext'
import './Header.css'

const Header = () => {

  const port = "http://localhost:5000"

  const {userInfo , setUserInfo} = useContext(UserContext)

  useEffect(() => {
    fetch(`${port}/profile`, {
      credentials: 'include'
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
      })
    })
  }, [])

  function logout(){
    fetch(`${port}/logout`, {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null)
  }

  const username = userInfo?.username


  return (
    <header>
      <Link to="/" className='logo'>Weblogify</Link>
      <nav>
        {username && (
          <>
            <a>{username}</a>
            <Link to='/create'>Create new Post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header