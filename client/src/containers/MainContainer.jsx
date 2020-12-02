import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Thoughts from '../screens/Thoughts';
import ThoughtCreate from '../screens/ThoughtCreate';
import ThoughtEdit from '../screens/ThoughtEdit';
import Register from '../screens/Register';
import { destroyThought, getAllThoughts, postThought, putThought } from '../services/thoughts';

function MainContainer(props) {
  const [thoughts, setThoughts] = useState([]);
  const history = useHistory();

  const { currentUser } = props;

  useEffect(() => {
    const fetchThoughts = async () => {
      const thoughtsData = await getAllThoughts();
      setThoughts(thoughtsData)
      // console.log(thoughts)
    }
    fetchThoughts()
  }, [])

  const handleCreate = async (thoughtData) => {
    const newThought = await postThought(thoughtData);
    setThoughts(prevState => [...prevState, newThought]);
    console.log(newThought)
    history.push('/thoughts');
  }

  const handleUpdate = async (id, thoughtData) => {
    const updatedThought = await putThought(id, thoughtData);
    setThoughts(prevState => prevState.map(thought => {
      return thought.id === Number(id) ? updatedThought : thought
    }))
    history.push('/thoughts');
  }

  const handleDelete = async (id) => {
    await destroyThought(id);
    setThoughts(prevState => prevState.filter(thought => thought.id !== id))
  }


  return (
    <Switch>
      <Route exact path='/thoughts'>
        <Thoughts
          thoughts={thoughts}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
      <Route path='/thoughts/new'>
        <ThoughtCreate handleCreate={handleCreate} />
      </Route>
      <Route path='/thoughts/:id/edit'>
        <ThoughtEdit
          thoughts={thoughts}
          handleUpdate={handleUpdate}
        />
      </Route>
      <Route path='/register'>
        <Register handleRegister={props.handleRegister}/>
      </Route>
        

    </Switch>
  );
}

export default MainContainer;