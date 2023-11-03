import React, { useState, useRef } from 'react';
import './App.css';
import yaySound from "./Sound/yay.mp3"
import uhhSound from "./Sound/uhh.mp3"
import { Board } from './Components/Board';
import { ScoreBoard } from './Components/ScoreBoard';
import { ResetButton } from './Components/ResetButton';

function App() {

  const yayAudio = useRef(null);
  const uhhAudio = useRef(null);

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    })

    const winner = checkWinner(updatedBoard);

    if(winner){
      if(winner === "O"){
        let {oScore} = scores;
        oScore += 1
        setScores({...scores, oScore})
      }else{
        let {xScore} = scores;
        xScore += 1
        setScores({...scores, xScore})
      }
    }

   

    setBoard(updatedBoard);

    setXPlaying(!xPlaying);
  }

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
  
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        if (board[x] === "X") {
          yayAudio.current.play(); 
        } else {
          uhhAudio.current.play(); 
        }
        setGameOver(true);
        return board[x];
      }
    }
  }
  

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }


  return (
      <div className="App">
        <ScoreBoard scores={scores} xPlaying={xPlaying} />
        <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
        <ResetButton resetBoard={resetBoard} />
        <audio ref={yayAudio}>
          <source src={yaySound} type="audio/mpeg" />
        </audio>
        <audio ref={uhhAudio}>
          <source src={uhhSound} type="audio/mpeg" />
        </audio>
      </div>
    );
}

export default App;
