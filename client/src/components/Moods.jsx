import React from 'react';

function Moods(props) {
  console.log(props);
  
  return (
    <div>
      {
        props.moods.map(flavor => (
          <p key={flavor.id}>(mood.name)</p>
        ))
      }
    </div>
  );
}

export default Moods;