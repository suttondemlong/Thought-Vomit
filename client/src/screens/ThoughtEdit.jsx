import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function ThoughtEdit(props) {
  const { id } = useParams();
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: '',
    content: ''
  })

  useEffect(() => {
    const prefillForm = () => {
      const thoughtItem = props.thoughts.find(thought => thought.id === Number(id));
      setFormData({
        title: thoughtItem.title,
        content: thoughtItem.content
      })
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

  return (
    <div>
      <form>
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
        <button onClick={(e) => {
          e.preventDefault();
          props.handleUpdate(id, formData)
        }}>Save It</button>
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