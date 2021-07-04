import React from 'react';
import './Control.css';

console.log(window.location.origin);
function Control({leftPush, rightPush,upPush,downPush}) {
  return (
    <div className="Control">
      <img src="img/left.png" alt="left" onClick={leftPush} />
      <img src="img/right.png" alt="right" onClick={rightPush} />
      <img src="img/up.png" alt="up" onClick={upPush} />
      <img src="img/down.png" alt="down" onClick={downPush} />
    </div>
  );
}

export default Control;
