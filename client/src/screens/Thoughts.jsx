import React from 'react';
import { Link } from 'react-router-dom';

function Thoughts({ currentUser, thoughts, handleDelete }) {

  return (
    <div>
      <h3 className="title">Thoughts</h3>
      <div className="thoughts-container">
      {
        thoughts.map(thought => (
          <React.Fragment key={thought.id}>
            {
              thought.user_id === currentUser?.id &&
              <div className="thoughts">
              <div className="one-thought">
                <Link
                  id="thought-title-link"
                  to={`/thoughts/${thought.id}`}>
                  <p className="subtitle">{thought.title}</p>
                </Link>
                <p className="thought-content">{thought.content}</p>
                <button
                  className="button"
                  id="keep-button">
                  <Link
                    className="polish-link"
                    to={`/thoughts/${thought.id}/edit`} >
                    Polish
                    </Link>
                </button>
                <button
                  className="button"
                  id="trash-button"
                  onClick={() => handleDelete(thought.id)}>
                  Delete
                </button>
              </div>
              </div>
            }
            </React.Fragment>
        ))
      }
      </div>
    </div>
  );
}

export default Thoughts;