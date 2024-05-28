import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'

const Signup = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add sign-up logic here.
    console.log('ID:', id);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Name:', name);
    console.log('Date of Birth:', dob);
    console.log('Gender:', gender);
    console.log('Phone Number:', phone);
  };

  return (
    <div className="background">
      <div className="centering">
        <form className="my-form" onSubmit={handleSubmit}>
          <div className="signup-welcome-row">
            <Link to="/">
              <img className="signup-welcome" alt="Logo" src={logo} />
            </Link>
            <h1>Sign Up!</h1>
          </div>
          <div className="my-form__content">
            <div className="text-field">
              <label htmlFor="id">ID:</label>
              <input
                aria-label="ID"
                type="text"
                id="id"
                name="id"
                placeholder="Your ID"
                autoComplete="off"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>
            <div className="text-field">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Your Password"
                title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-field">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                id="confirm-password"
                type="password"
                name="confirm-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-field">
              <label htmlFor="name">Name:</label>
              <input
                aria-label="Name"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="text-field">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                aria-label="Date of Birth"
                type="date"
                id="dob"
                name="dob"
                placeholder="Your Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
            <div className="text-field">
              <label htmlFor="phone">Phone Number:</label>
              <input
                aria-label="Phone Number"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="text-field">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="my-form__actions">
          <input type="submit" className="my-form__button" value="Sign-Up" />
            <div className="my-form__signin">
              <Link to="/Login" title="Login" className='Login'>
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
