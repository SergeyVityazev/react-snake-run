import React from 'react';
import Cells from '../Cells/Cells';
import './Field.css';

export const Field = (props) => {

   function isSnake(item) {
      return props.bodySnake.indexOf(item)>=0 ? true : false;
   }
  
  return (
    <div className="Field">
      {Object.entries(props.cells).map((item, index) =>
        index % 32 === 0 && index !== 0 ? (
          <Cells
            floatCell={'none'}
            isWall={item[1].isWall}
            isSnake={isSnake(item[0]) ? true : false}
            isFood={item[0] === props.isFood ? props.isFood : false}
          />
        ) : (
          <Cells
            floatCell={'left'}
            isWall={item[1].isWall}
            isSnake={isSnake(item[0]) ? true : false}
            isFood={item[0] === props.isFood ? props.isFood : false}
          />
        ),
      )}
    </div>
  );
};

export default Field;
