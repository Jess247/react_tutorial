import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// render a single button
class Square extends React.Component {
  // initialize the state
    constructor(props) {
      // super needs to be called when defining the constructor of a subclass 
      super(props);
      this.state = {
        value: null,
      };
    }

    render() {
      return (
        // both onClick functions are the same. bottom one is shorter (better practice)
        // <button className="square" onClick={function() {this.State({value: 'X'});}}> 
        // re-render square whenever its clicked
        <button className="square" 
        onClick={() => this.setState({value: 'X'})}
        >
        {/* change to current state */}
          {this.state.value}
        </button>
      );
    }
  }
  
  // render whole gameboard with 9 squares
  class Board extends React.Component {
    renderSquare(i) {
      // pass prop value to square
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  // render bord with values
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  