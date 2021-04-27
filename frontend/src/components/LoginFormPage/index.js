import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './LoginForm.css'

function LoginFormPage({ handleClick }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const demoSubmit = (e) => {
    e.preventDefault();
    const credential = 'demo'
    const password = 'password'
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        // console.log(data)
        // if (data && data.errors) setErrors(data.errors);
      })
  }

  return (
    <>
      <form className='modalForm' onSubmit={handleSubmit}>
        <div className='login-register'>
          <h1>Log in!</h1>
          <button
            type="button"
            onClick={handleClick}
          >Register!</button>
        </div>
        <ul className='errors-list'>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className='login-container'>
          <label className='usernameLabel'>
            Username or Email
        <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              // required
            />
          </label>
          <label className='passwordLabel'>
            Password
        <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
          </label>
        </div>
        <button type="submit">Log In</button>
        {/* <h1>Don't Have An Account?</h1> */}
        <button onClick={demoSubmit} type="button">Demo Log In</button>
      </form>
    </>
  );
}

export default LoginFormPage;