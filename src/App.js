import React from 'react';
import './App.css';
import Field from './components/Field/Field'
import Control from './components/Control/Control'
import Statistic from './components/Statistic/Statistic';
class App extends React.Component {
  state = [
    {
      isLoss: false,
    },

    { count: 0 },

    {
      cells: {},
    },
    {
      bodySnake: [],
    },
    {
      isFood: '',
    },
    {
      growSnake: false,
    },
    {
      direction: '',
    },
    {
      timeId: '',
    },
  ];

  constructor() {
    super();
    const cells = {};
    let bodySnake = [];
    for (let i = 0; i <= 31; i++) {
      for (let j = 0; j <= 31; j++) {
        if (i === 0 || j === 0 || i === 31 || j === 31) {
          cells[`R${i}C${j}`] = {
            rowNumber: i,
            columnNumber: j,
            isEmpty: false,
            isFood: false,
            isSnake: false,
            isWall: true,
          };
        } else {
          cells[`R${i}C${j}`] = {
            rowNumber: i,
            columnNumber: j,
            isEmpty: false,
            isFood: false,
            isSnake: false,
            isWall: false,
          };
        }
      }
    }
    bodySnake = ['R1C1', 'R1C2', 'R1C3', 'R1C4', 'R1C5'];
    let isFood = `R${Math.floor(Math.random() * (30 - 1)) + 1}C${
      Math.floor(Math.random() * (30 - 1)) + 1
    }`;
    this.state = {
      cells,
      bodySnake,
      isFood,
      growSnake: false,
      isLoss: false,
      count: 0,
      direction: '',
      timeId: '',
    };
  }

  leftPush = () => {
    let left = () => {
    if (!this.state.isLoss) {
      const currentBodySnake = this.state.bodySnake;
      let growSnake = this.state.growSnake;
      let count = this.state.count;
      let lastElem = currentBodySnake[currentBodySnake.length - 1];
      let column = Number(lastElem.substr(lastElem.indexOf('C') + 1));
      let row = Number(lastElem.substr(1, lastElem.indexOf('C') - 1));
      if (currentBodySnake.indexOf(`R${row}C${column - 1}`, currentBodySnake.length - 2) === -1) {
        column--;
        lastElem = `R${row}C${column}`;
        currentBodySnake.push(lastElem);
        if (!growSnake) {
          currentBodySnake.shift();
        } else {
          //змеюка съела еду и растет (последний эл. массива не удаляем)
          count++;
          growSnake = false;
        }
        this.setState({ bodySnake: currentBodySnake, growSnake: growSnake, count });
      }
      this.isLoss(lastElem);
      this.isEat();
      
    }
  }
  let timeId = setInterval(left, 300);
  this.deletePreviousPush('leftPush', timeId);
  };

  rightPush = () => {
      let right = ()=> {       
      if (!this.state.isLoss) {
        const currentBodySnake = this.state.bodySnake;
        let growSnake = this.state.growSnake;
        let count = this.state.count;
        let lastElem = currentBodySnake[currentBodySnake.length - 1];
        let column = Number(lastElem.substr(lastElem.indexOf('C') + 1));
        let row = Number(lastElem.substr(1, lastElem.indexOf('C') - 1));
        if (currentBodySnake.indexOf(`R${row}C${column + 1}`, currentBodySnake.length - 2) === -1) {
          column++;
          lastElem = `R${row}C${column}`;
          currentBodySnake.push(lastElem);
          if (!growSnake) {
            currentBodySnake.shift();
          } else {
            //змеюка съела еду и растет (последний эл. массива не удаляем)
            count++;
            growSnake = false;
          }
          this.setState({ bodySnake: currentBodySnake, growSnake: growSnake, count });
        }
        this.isLoss(lastElem);
        this.isEat();       
      }
    }
    let timeId = setInterval(right,300);
    this.deletePreviousPush('rightPush', timeId);
  };

  upPush = () => {
    let up = () => {
      if (!this.state.isLoss) {
        const currentBodySnake = this.state.bodySnake;
        let growSnake = this.state.growSnake;
        let count = this.state.count;
        let lastElem = currentBodySnake[currentBodySnake.length - 1];
        let column = Number(lastElem.substr(lastElem.indexOf('C') + 1));
        let row = Number(lastElem.substr(1, lastElem.indexOf('C') - 1));
        if (currentBodySnake.indexOf(`R${row - 1}C${column}`, currentBodySnake.length - 2) === -1) {
          row--;
          lastElem = `R${row}C${column}`;
          currentBodySnake.push(lastElem);
          if (!growSnake) {
            currentBodySnake.shift();
          } else {
            //змеюка съела еду и растет (последний эл. массива не удаляем)
            count++;
            growSnake = false;
          }
          this.setState({ bodySnake: currentBodySnake, growSnake: growSnake, count });
        }
        this.isLoss(lastElem);
        this.isEat();
      }
    }
    let timeId = setInterval(up, 300);
    this.deletePreviousPush('upPush', timeId);
  };

  downPush = () => {
    let down = () => {
      this.deletePreviousPush('downPush', timeId);
    if (!this.state.isLoss) {
      const currentBodySnake = this.state.bodySnake;
      let growSnake = this.state.growSnake;
      let count = this.state.count;
      let lastElem = currentBodySnake[currentBodySnake.length - 1];
      let column = Number(lastElem.substr(lastElem.indexOf('C') + 1));
      let row = Number(lastElem.substr(1, lastElem.indexOf('C') - 1));
      if (currentBodySnake.indexOf(`R${row + 1}C${column}`, currentBodySnake.length - 2) === -1) {
        row++;
        lastElem = `R${row}C${column}`;
        currentBodySnake.push(lastElem);
        if (!growSnake) {
          currentBodySnake.shift();
        } else {
          //змеюка съела еду и растет (последний эл. массива не удаляем)
          count++;
          growSnake = false;
        }
        this.setState({ bodySnake: currentBodySnake, growSnake: growSnake, count });
      }
      this.isLoss(lastElem);
      this.isEat();
      
    }
  }
  let timeId = setInterval(down, 300);
  this.deletePreviousPush('downPush', timeId);
  };

  deletePreviousPush = (direction, timeId) => {
    if (direction!== this.state.direction){
      clearInterval(this.state.timeId)
      this.setState({direction, timeId})
    }
  };

  isEat = () => {
    let lastElemBodySnake = this.state.bodySnake[this.state.bodySnake.length - 1];
    if (lastElemBodySnake === this.state.isFood) {
      let newFood = () => {
        return `R${Math.floor(Math.random() * (30 - 1)) + 1}C${
          Math.floor(Math.random() * (30 - 1)) + 1
        }`;
      };

      this.setState({ isFood: newFood(), growSnake: true });
      if (this.state.bodySnake.indexOf(newFood) >= 0) {
        //рекурсивно вызовем функцию, если еда попала на тело змеи
        this.isEat();
      }
    }
  };

  isLoss = (lastElem) => {
    console.log(this.state.growSnake);
    let k = 0;
    this.state.bodySnake.forEach((item) => {
      if (this.state.bodySnake.indexOf(item, k + 1) >= 0) {
        console.log('YOU LOSS');
        this.setState({ isLoss: true });
      }
      k++;
    });
    if (this.state.cells[lastElem].isWall) {
      console.log('YOU LOSS, because Wall');
      this.setState({ isLoss: true });
    }
  };

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div>
          <Field
            cells={this.state.cells}
            bodySnake={this.state.bodySnake}
            isFood={this.state.isFood}
          />
          <Control
            leftPush={this.leftPush}
            rightPush={this.rightPush}
            upPush={this.upPush}
            downPush={this.downPush}
          />
        </div>
        <Statistic isLoss={this.state.isLoss} count={this.state.count} />
      </div>
    );
  }
}

export default App;
