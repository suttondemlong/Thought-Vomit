import { useState } from 'react';

function ThoughtCreate(props) {
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
    e.preventDefault();
    props.handleCreate(formData)
    console.log(formData)
  }

  const trashThought = (e) => {
    e.preventDefault();
    setFormData({
      content: ''
    })
  }

  return (
    <form>
      <h3>Create</h3>
      <label>
        <input
          type='textarea'
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <button onClick={saveThought}>keep</button>
      <button onClick={trashThought}>Trash</button>
    </form>
  );
}

export default ThoughtCreate;