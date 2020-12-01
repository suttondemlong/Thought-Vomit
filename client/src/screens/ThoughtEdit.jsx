import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ThoughtEdit(props) {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const thoughtItem = props.thought.find(thought => thought.id === Number(id));
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
      <form onSubmit={(e) => {
      e.preventDefault();
      props.handleUpdate(formData);
    }}>
      <h3>Polish that turd</h3>
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
      <button>Keep</button>
      <button>Trash</button>
    </form>
    </div>
  );
}

export default ThoughtEdit;