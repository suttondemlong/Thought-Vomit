import React from 'react';
import { Link } from 'react-router-dom';

function Thoughts({ currentUser, thoughts, handleDelete }) {

  return (
    <div>
      <h3 className="title">Thoughts</h3>
      {
        thoughts.map(thought => (
          <>
            <React.Fragment key={thought.id}>
              {
                thought.user_id === currentUser?.id &&
                <div className="one-thought">
                  <Link to={`/thoughts/${thought.id}`}><p className="subtitle">{thought.title}</p></Link>
                  <p>{thought.content}</p>
                  <Link to={`/thoughts/${thought.id}/edit`} ><button>Polish</button></Link>
                  <button onClick={() => handleDelete(thought.id)}>Delete</button>
                </div>
              }
              </React.Fragment>
          </>
        ))
      }
    </div>
  );
}

export default Thoughts;