import React from 'react';
import './Cells.css';

const Cells = (props) => {
  let divStyle = {};
  if (props.floatCell === 'left') {
    divStyle = {
      float: 'left',
    };
  } else if (props.floatCell === 'none') {
    divStyle = {
      clear: 'left',
      float: 'left',
    };
  }

  if (props.isWall) {
    divStyle['background-color'] = 'yellow';
  }
  
  if (props.isSnake) {
    divStyle['background-color'] = 'black';
  }

  if (props.isFood) {
    divStyle['background-color'] = 'red';
  }

  return props.isWall ? (
    <div className="Cell" style={divStyle}></div>
  ) : (
    <div className="Cell" style={divStyle}></div>
  );
};

export default Cells;
