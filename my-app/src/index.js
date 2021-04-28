import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// render a single button
function Square(props){
  // ______ only neaded with class ___________
  // // initialize the state
  //   constructor(props) {
  //     // super needs to be called when defining the constructor of a subclass 
  //     super(props);
  //     this.state = {
  //       value: null,
  //     };
  //   }
  // ______ only neaded with class ___________

    // render() {
      return (
        // both onClick functions are the same. bottom one is shorter (better practice)
        // <button className="square" onClick={function() {this.State({value: 'X'});}}> 
        // re-render square whenever its clicked
        <button className="square" 
        onClick={props.onClick}
        >
        {/* change to current state */}
          {props.value}
        </button>
      );
    // }
  }
  
  // render whole gameboard with 9 squares
  class Board extends React.Component {
   

    renderSquare(i) {
      // pass prop value to square
      return <Square value={this.props.squares[i]}
      onClick={() => this.props.onClick(i) } />;
    }
  
    render(){
      return (
        <div>
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
    // history
    constructor(props) {
      super(props);
      this.state =  {
        history: [{
          squares: Array(9).fill(null),
        }],
        xIsNext: true,
      };
    }

    // handle click
    handleClick(i) {
      const history = this.state.history;
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      
      // ignore click if someone has won
      if(calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        // concat doesnt mutate the array
        history: history.concat([{
          squares: squares,
        }]),
        xIsNext: !this.state.xIsNext,
      });
    }

    render() {
      // output the status and history of game 
      const history = this.state.history;
      const current = history[history.length -1];
      const winner = calculateWinner(current.squares);
      let status;
      if(winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next Player: " + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
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

  // check for winners
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  
  