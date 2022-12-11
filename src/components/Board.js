import React from "react";
import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [X, setX] = useState(true);

  const renderSquare = (i) => {
    return <Square value={square[i]} click={() => pressButton(i)} />;
  };
  const pressButton = (i) => {
    if (square[i] === null) {
      const squareCopy = [...square];
      squareCopy[i] = X ? "X" : "O";
      setX(!X);
      setSquare(squareCopy);
      console.log(i);
    }
  };
  const restart = () => {
    setSquare(Array(9).fill(null));
  };

  const winner = () => {
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
      const [a, b, c] = lines[i]; //lines of i is position of lines array
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        //square[a]  checks if there is a null
        return square[a];
      }
    }
  };
  const win = winner();
  let status;
  if (win) {
    status = "Winner: " + win;
  } else {
    status = "Next Player: " + (X ? "X" : "O");
  }

  return (
    <div className="square">
      <h1>TIC TAC TOE</h1>
      <div className="one">
        <div className="two">
          <div className="row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>

      <button className="rs" onClick={restart}>
        restart
      </button>
      <h1 className={win ? "win" : "same"}>{status}</h1>
    </div>
  );
};

export default Board;
