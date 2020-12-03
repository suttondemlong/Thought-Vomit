import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addMood } from '../services/moods';

function ThoughtCreate(props) {
  const { moods } = props
  const [formData, setFormData] = useState({
    title: 'Untitled',
    content: ''
  })

  const [chosenMoods, setChosenMoods] = useState([])



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const saveThought = (e) => {
    e.preventDefault();
    props.handleCreate({
      ...formData,
      moods: chosenMoods
    })
  }

  const trashThought = (e) => {
    e.preventDefault();
    setFormData({
      content: ''
    })
  }

  const handleCheckBoxChange = (e) => {
    if (e.target.checked) {
      setChosenMoods(prevState => [...prevState, e.target.value])
    } else {
      setChosenMoods(prevState => prevState.filter((id) => id !== e.target.value))
    }
  }

  return (
    <form onSubmit={saveThought}>
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
      {
        moods.map((mood) => (
          <label>{mood.name}
            <input
              type='checkbox'
              value={mood.id}
              onChange={handleCheckBoxChange}
            />
          </label>
        ))
      }
      <br />
      {
      props.currentuser ? 
          <button>keep</button> :
          <Link to="/login"><button>keep</button></Link>
      }
      <button onClick={trashThought}>Trash</button>
    </form>
  );
}

export default ThoughtCreate;