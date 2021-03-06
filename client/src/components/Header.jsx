import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className='header-container'>
      <Link to='/' className="title" id="page-title">Thought Vomit</Link>
      <div className='navBar'>
        <Link className='navLink' to='/about'>What is this?</Link>
        {
          currentUser ?
          <Link className='navLink' to='/thoughts'>Thoughts</Link> :
          <Link className='navLink' to='/login'>Thoughts</Link>
        }
        {
          currentUser ?
            <Link className='navLink' to='/' onClick={handleLogout}>Logout</Link>
            :
            <Link className='navLink' to='/login'>Login</Link>
        }
      </div>
    </div>
  );
}

export default Header;