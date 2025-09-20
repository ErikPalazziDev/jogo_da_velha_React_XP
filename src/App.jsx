import { DropdownButton, DropdownItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css'; //mudança
import Board from './components/Board';

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [sound, setSound] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Voltar para a jogada #' + move;
    } else {
      description = 'Voltar para o começo do jogo';
    }
    console.log(move)
    return (
      <DropdownItem as="button" onClick={() => jumpTo(move)}> {description} </DropdownItem>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} moves={moves} setHistory={setHistory} setCurrentMove={setCurrentMove} setSound={setSound} sound={sound}/>
      </div>
    </div>
  );
}


