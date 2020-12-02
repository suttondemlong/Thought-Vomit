import React from 'react';
import { Link } from 'react-router-dom';

function Thoughts({ currentUser, thoughts, handleDelete }) {
  // const { currentUser } = props;
  console.log(currentUser)

  return (
    <div>
      <h3>Thoughts</h3>
      {
        thoughts.map(thought => (
          <>
            <React.Fragment key={thought.id}>
              {
                thought.user_id === currentUser?.id &&
                <>
                  <Link to={`/thoughts/${thought.id}`}><p>{thought.title}</p></Link>
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