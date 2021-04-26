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
        onClick={() => this.props.onClick()}
        >
        {/* change to current state */}
          {this.props.value}
        </button>
      );
    // }
  }
  
  // render whole gameboard with 9 squares
  class Board extends React.Component {
    constructor(props) {
      // collect date from mulitble children (two child components comunicate)
      // this declares the shared state in their parent
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }

    // handle click
    handleClick(i) {
      // create copy of squares to change the value (immutability)
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares})
    }

    renderSquare(i) {
      // pass prop value to square
      return <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i) } />;
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
  
  