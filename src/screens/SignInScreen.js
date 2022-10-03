import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../firebase';
import '../styles/SignInScreen.css';

const initialState = {
  email: '',
  password: ''
};

const SignInScreen = () => {
  const [inputValues, setInputValues] = useState(initialState);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      inputValues.email,
      inputValues.password
    )
      .then((authUser) => {
        console.log('User successfully created', authUser);
      })
      .catch((err) => alert(err.message));

    setInputValues(initialState);
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, inputValues.email, inputValues.password)
      .then((authUser) => console.log('User successfully logged in', authUser))
      .catch((err) => alert(err.message));

    setInputValues(initialState);
  };

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signInScreen__gray">New to Netflix? </span>
          <span className="signInScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
