import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="login-container">
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <h3 className='title'>Login</h3>
      <label id="username-label">Username:
      <br/>  
       <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          />
      </label>
      <br/>
      <label id="password-label">Password:
      <br/>
       <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <div>
        <button className="button" id="login-button">Login</button>
        <button className="button" id="signup-button"><Link className="link" id="signup-link" to="/register">Sign Up</Link></button>
      </div>
    </form>
    </div>

  );
}

export default Login;