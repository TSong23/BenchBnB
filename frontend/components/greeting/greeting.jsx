import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout}) => {
  const sessionLinks = () => (
    <nav>
      <Link to="/login">Login</Link>

      <Link to="/signup">Sign up!</Link>
    </nav> 
    );

  const greet = () => (
    <div>
      <h2>hello, {currentUser.username}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  );
  return currentUser? greet() : sessionLinks();

};

export default Greeting;