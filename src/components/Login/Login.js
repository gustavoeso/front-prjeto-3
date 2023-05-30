import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Link } from "react-router-dom";

async function loginUser(credentials) {
    return fetch('https://spotifinder.onrender.com/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="body-login">
      <form className="form" onSubmit={handleSubmit}>
        <div className="title-container">
          <div className="title"> Welcome to Spotifinder</div> 
        </div>
        <div className="subtitle">Let's Log in!</div>
        <div className="input-container ic1">
          <input  className="input" type="text" placeholder=" " onChange = {e => setUserName(e.target.value)}/>
          <div className="cut"></div>
          <label className="placeholder">Username</label>
        </div>
        <div className="input-container ic2">
          <input className="input" type="password" placeholder=" " onChange = {e => setPassword(e.target.value)} />
          <div className="cut"></div>
          <label className="placeholder">Password</label>
        </div>
        <button type="submit" className="submit">submit</button>
      </form>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }