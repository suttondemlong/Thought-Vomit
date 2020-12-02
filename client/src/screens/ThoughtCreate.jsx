import { useState } from 'react';
import { addMood } from '../services/moods';

function ThoughtCreate(props) {
  const { moods } = props
  const [formData, setFormData] = useState({
    title: 'Untitled',
    content: ''
  })

  const [thoughtMoods, setThoughtMoods] = useState({
    name: '',
    value: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setThoughtMoods(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const saveThought = (e) => {
    e.preventDefault();
    props.handleCreate(formData)
    addMood()
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
      <label>{moods[0].name}
        <input
          name='mood'
          type='checkbox'
          value={moods[0].id}
          onChange={handleInputChange}
        />
      </label>
      <label>{moods[1].name}
        <input
          name='mood'
          type='checkbox'
          value={moods[1].id}
          onChange={handleInputChange}
        />
      </label>
      <label>{moods[2].name}
        <input
          name='mood'
          type='checkbox'
          value={moods[2].id}
          onChange={handleInputChange}
        />
      </label>
      <label>{moods[3].name}
        <input
          name='mood'
          type='checkbox'
          value={moods[3].id}
          onChange={handleInputChange}
        />
      </label>
      <label>{moods[4].name}
        <input
          name='mood'
          type='checkbox'
          value={moods[4].id}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <button onClick={() => saveThought()}>keep</button>
      <button onClick={trashThought}>Trash</button>
    </form>
  );
}

export default ThoughtCreate;