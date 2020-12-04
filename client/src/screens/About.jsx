import React from 'react';
import '../App.css';

function About(props) {
  return (
    <div className="about">
      <h3 className="sub-title">What is this?</h3>
      <p className="about-text">
        Thought Vomit is a tool for getting started in the creative process.
        It’s like a blind contour/free-association/stream of consciousness journal.
        Use it to vent after a frustrating day and then delete the text without saving it.
        Or pontificate and wax poetic in a flow state without worrying about typos or grammar.
        If you feel you wrote something worthwhile, save it and polish it up later. 
      </p>
      <div className="moods-container">
        {props.moods.map(mood => (
          <div className="mood-card">
            <h4 className="sub-title" id="mood-name">{mood.name}</h4>
            <p className="text-body">{mood.description}</p>
          </div>
        ))}
      </div>
    </div>

  );
}

export default About;