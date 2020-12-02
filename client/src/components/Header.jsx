import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className='header-container'>
      <h1>Thought Vomit</h1>
      <div className='navBar'>
        {
          currentUser ?
            <Link className='navLink' to='/' onClick={handleLogout}>Logout</Link>
            :
            <Link className='navLink' to='/login'>Login/Register</Link>
        }
        <Link className='navLink' to='/thoughts'>Thoughts</Link>
        <Link className='navLink' to='/thoughts/new'>New</Link>
      </div>
    </div>
  );
}

export default Header;