import React from 'react';
import { Link } from 'react-router-dom';

function Thoughts({ currentUser, thoughts, handleDelete }) {
  console.log(currentUser)

  return (
    <div>
      <h3 className="title">Thoughts</h3>
      {
        thoughts.map(thought => (
          <>
            <React.Fragment key={thought.id}>
              {
                thought.user_id === currentUser?.id &&
                <>
                  <Link to={`/thoughts/${thought.id}`}><p className="subtitle">{thought.title}</p></Link>
                  <p>{thought.content}</p>
                  <Link to={`/thoughts/${thought.id}/edit`} ><button>Polish</button></Link>
                  <button onClick={() => handleDelete(thought.id)}>Delete</button>
                </>
              }
              </React.Fragment>
          </>
        ))
      }
    </div>
  );
}

export default Thoughts;