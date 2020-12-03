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
  }, [props.foods])

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
    <div>
      <form onSubmit={saveThought}>
      <h3>Polish</h3>
      <label>Title:
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type='textarea'
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
        </label>
        {
        moods.map((mood) => (
          <label>{mood.name}
            <input
              type='checkbox'
              checked={chosenMoods.includes(mood.id)}
              value={mood.id}
              onChange={handleCheckBoxChange}
            />
          </label>
        ))
      }
        <button>Save It</button>
        <button onClick={(e) => {
          e.preventDefault();
          props.handleDelete(id);
          history.push('/thoughts');
        }}>Delete</button>
    </form>
    </div>
  );
}

export default ThoughtEdit;