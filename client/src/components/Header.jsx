import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <h1>Thought Vomit</h1>
      <Link to='/login'>Login/Register</Link>
    </div>
  );
}

export default Header;