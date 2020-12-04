import { useState } from 'react';

function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='signup-container'>
      <h3 className='title'>New Account</h3>
      <form onSubmit={(e) => {
      e.preventDefault();
      props.handleRegister(formData);
    }}>
        <label id="username-label">Username:
           <br/>
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          />
      </label>
      <br />
      <label id="email-label">Email:
          <br/>
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
          />
      </label>
      <br />
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
      <button className='button' id='submit-button'>submit</button>
    </form>
    </div>
  );
}

export default Register;