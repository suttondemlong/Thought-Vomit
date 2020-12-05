import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="thought-create-container">
    <h3 className="title">Create</h3>
      <div className='create-container'>
      <form onSubmit={saveThought}> 
      <div className='text-checkbox'>    
        <div>     
          <label>
              <textarea
              className="text-area"
              id="create-text-area"
              name='content'
              value={formData.content}
              onChange={handleChange}
              />
          </label>
        </div>
        <div className='checkboxes'>
        {
          moods.map((mood) => (
            <label className="checkbox-label" key={mood.id}>
              <input
                className="checkbox-input"
                type='checkbox'
                value={mood.id}
                onChange={handleCheckBoxChange}
                />
              {mood.name}
            </label>
          ))
        }
        </div>
      </div>
      <br />
      {
        props.currentUser ? 
        <button className="button" id="keep-button">keep</button> :
        <button className="button" id="keep-button"><Link className="link" id='keep-link' to="/login">keep</Link></button>
      }
      <button className="button" id="trash-button" onClick={trashThought}>trash</button>
      </form>
      </div>
    </div>
  );
}

export default ThoughtCreate;