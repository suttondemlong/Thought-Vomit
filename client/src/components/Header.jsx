import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <h1>Thought Vomit</h1>
      {
        currentUser ?
          <Link to='/' onClick={handleLogout}>Logout</Link>
          :
          <Link to='/login'>Login/Register</Link>
      }
      <Link to='/thoughts'>Thoughts</Link>
      <hr/>
    </div>
  );
}

export default Header;