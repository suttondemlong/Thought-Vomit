import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postThought } from '../services/thoughts'

function ThoughtCreate(props) {
  const [thoughts, setThoughts] = useState([]);
  const [formData, setFormData] = useState({
    title: 'Untitled',
    content: ''
  })

  const history = useHistory()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCreate = async (thoughtData) => {
    const newThought = await postThought(thoughtData);
    setThoughts(prevState => [...prevState, newThought]);
    history.push('/thoughts');
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Let it out.</h3>
      <label>
        <input
          type='textarea'
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <button>Keep</button>
      <button>Trash</button>
    </form>
  );
}

export default ThoughtCreate;