import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getOneThought } from '../services/thoughts'


function ThoughtDetail(props) {
  const [thoughtItem, setThoughtItem] = useState(null);
  const { id } = useParams();
  const history = useHistory()

  useEffect(() => {
    const fetchThoughtItem = async () => {
      const thoughtData = await getOneThought(id);
      setThoughtItem(thoughtData);
    }
    fetchThoughtItem();
  }, [id])


  return (
    <div>
      <h3>{thoughtItem?.title}</h3>
      <p>{thoughtItem?.content}</p>
      <Link to={`/thoughts/${thoughtItem?.id}/edit`}><button>Polish</button></Link>
      <button onClick={(e) => {
        e.preventDefault();
        props.handleDelete(thoughtItem?.id)
        history.push('/thoughts')
      }}>Delete</button>
    </div>
  );
}

export default ThoughtDetail;