import { useState } from 'react';
import { addMood } from '../services/moods';

function ThoughtCreate(props) {
  const { moods } = props
  const [formData, setFormData] = useState({
    title: 'Untitled',
    content: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const saveThought = (e) => {
    debugger
    e.preventDefault();
    props.handleCreate(formData)
  }

  const trashThought = (e) => {
    e.preventDefault();
    setFormData({
      content: ''
    })
  }

  return (
    <form>
      <h3 className="title">Create</h3>
      <label>
        <textarea
          name='content'
          cols='40'
          rows='20'
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <br/>
      <button onClick={() => saveThought()}>keep</button>
      <button onClick={trashThought}>Trash</button>
    </form>
  );
}

export default ThoughtCreate;