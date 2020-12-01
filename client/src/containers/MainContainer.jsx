import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import ThoughtCreate from '../screens/ThoughtCreate';
import Thoughts from '../screens/Thoughts';
import { destroyThought, getAllThoughts, postThought, putThought } from '../services/thoughts';

function MainContainer(props) {
  const [thoughts, setThoughts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchThoughts = async () => {
      const thoughtsData = await getAllThoughts();
      setThoughts(thoughtsData)
      console.log(thoughts)
    }
    fetchThoughts()
  }, [thoughts.length])

  const handleCreate = async (thoughtData) => {
    const newThought = await postThought(thoughtData);
    setThoughts(prevState => [...prevState, newThought]);
    history.push('/thoughts');
  }

  const handleDelete = async (id) => {
    await destroyThought(id);
    setThoughts(prevState => prevState.filter(thought => thought.id !== id))
  }


  return (
    <Switch>
      <Route path='/thoughts/new'>
        <ThoughtCreate handleCreate={handleCreate} />
      </Route>
      <Route path='/thoughts'>
        <Thoughts
          thoughts={thoughts}
          handleDelete={handleDelete} />
      </Route>
    </Switch>
  );
}

export default MainContainer;