import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import Thoughts from '../screens/Thoughts';
import ThoughtCreate from '../screens/ThoughtCreate';
import ThoughtEdit from '../screens/ThoughtEdit';
import Register from '../screens/Register';
import ThoughtDetail from '../screens/ThoughtDetail'
// import Moods from '../components/Moods'
import About from '../screens/About'
import { destroyThought, getAllThoughts, postThought, putThought } from '../services/thoughts';
import { getAllMoods } from '../services/moods';

function MainContainer(props) {
  const [thoughts, setThoughts] = useState([]);
  const [moods, setMoods] = useState([]);
  const history = useHistory();

  const { currentUser } = props;

  useEffect(() => {
    const fetchThoughts = async () => {
      const thoughtsData = await getAllThoughts();
      setThoughts(thoughtsData)
    }
    if (currentUser) {
      fetchThoughts()
    }
  }, [currentUser])
  
  useEffect(() => {
    const fetchMoods = async () => {
      const moodData = await getAllMoods();
      setMoods(moodData)
    }
    fetchMoods()
  }, [])

  const handleCreate = async (thoughtData) => {
    const newThought = await postThought(thoughtData);
    setThoughts(prevState => [...prevState, newThought]);
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
      <Route path='/thoughts/:id/edit'>
        <ThoughtEdit
          thoughts={thoughts}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          moods={moods}
        />
      </Route>
      <Route path='/thoughts/:id'>
        <ThoughtDetail handleDelete={handleDelete}/>
      </Route>
      <Route exact path='/thoughts'>
        <Thoughts
          thoughts={thoughts}
          moods={moods}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
      <Route path='/register'>
        <Register handleRegister={props.handleRegister}/>
      </Route>
      <Route path='/about'>
        <About moods={moods}/>
      </Route>
      <Route path='/'>
        <ThoughtCreate
          handleCreate={handleCreate}
          moods={moods}
          currentUser={currentUser}
        />
      </Route>
    </Switch>
  );
}

export default MainContainer;