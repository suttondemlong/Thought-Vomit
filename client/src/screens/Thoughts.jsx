import React from 'react';
import { Link } from 'react-router-dom';

function Thoughts(props) {
  return (
    <div>
      <h3>Thoughts</h3>
      {
        props.thoughts.map(thought => (
          <>
              <React.Fragment key={thought.id}>
                <Link to={`/thoughts/${thought.id}`}><p>{thought.title}</p></Link>
                <p>{thought.content}</p>
                {/* <Link to='/thoughts/edit'><button>Delete</button></Link> */}
                <button onClick={() => props.handleDelete(thought.id)}>Delete</button>
              </React.Fragment>
          </>
        ))
      }
    </div>
  );
}

export default Thoughts;