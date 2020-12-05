import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getOneThought } from '../services/thoughts';

function ThoughtEdit(props) {
  const { id } = useParams();
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: '',
    content: ''
  })

  const { moods } = props

  const [chosenMoods, setChosenMoods] = useState([])

  useEffect(() => {
    const prefillForm = async () => {
      const thoughtItem = await getOneThought(id);
      setFormData({
        title: thoughtItem.title,
        content: thoughtItem.content
      })
      setChosenMoods(thoughtItem.moods.map((mood) => mood.id))
    }
    if (props.thoughts.length) {
      prefillForm();
    }
  }, [props.thoughts.length, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCheckBoxChange = (e) => {
    if (e.target.checked) {
      setChosenMoods(prevState => [...prevState, parseInt(e.target.value)])
    } else {
      setChosenMoods(prevState => prevState.filter((id) => id !== parseInt(e.target.value)))
    }
  }

  const saveThought = (e) => {
    e.preventDefault();
    props.handleUpdate(id, {
      ...formData,
      moods: chosenMoods
    })
  }

  return (
    <div className="polish-container">
      <form onSubmit={saveThought}>
        <label>
        <br/>
        <input
          className="edit-title"
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <div className='text-checkbox'>
        <div >
          <label>
            <textarea
              className="text-area"
              name='content'
              cols='40'
              rows='20'
              value={formData.content}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='checkboxes'>  
          {
          moods.map((mood) => (
            <label className="checkbox-label">
              <input
                className="checkbox-input"
                type='checkbox'
                checked={chosenMoods.includes(mood.id)}
                value={mood.id}
                onChange={handleCheckBoxChange}
              />
              {mood.name}
            </label>
            ))
          }   
        </div>
      </div>
        <button className="button" id="keep-button">save</button>
        <button
          className="button"
          id="trash-button"
          onClick={(e) => {
          e.preventDefault();
          props.handleDelete(id);
          history.push('/thoughts');
        }}>trash</button>
    </form>
    </div>
  );
}

export default ThoughtEdit;