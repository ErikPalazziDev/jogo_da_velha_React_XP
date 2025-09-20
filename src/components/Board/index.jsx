import { useState } from 'react';
import calculateWinner from "../../utils";
import BoardFinish from '../BoardFinish';
import BoardGame from '../BoardGame';
import BoardStart from '../BoardStart';
import styles from './style.module.css';

export default function Board({ xIsNext, squares, onPlay, moves, setCurrentMove, setSound, sound }) {
  const [status, setStatus] = useState('I');
  const winner = calculateWinner(squares);

  console.log('Squares:' + squares);

  if (winner) {
    if (winner == 'X' && status == 'J') {
      setStatus('X');
    } else if (status == 'J') {
      setStatus('O');
    }
  } 
  else if (!squares.some(square => square == null) && status == 'J'){
    setStatus('V');
  }

  return (
    <div className={styles.board}>
      {/* {status == 'V' && <img className={styles.result} src={deuVelha} alt="Deu velha!"/>}
      {status == 'X' && <img className={styles.result} src={jogadorXvenceu} alt="Jogador X venceu!"/>}
      {status == 'O' && <img className={styles.result} src={jogadorOvenceu} alt="Jogador O venceu!"/>} */}

      <div className={styles.boardBack}>
        <div className={styles.header}>
          <p> Jogo da velha </p>
        </div>
        {console.log(status)}
        {status == 'I' && (<BoardStart setStatus={setStatus}/>)}
        {status == 'J' && (<BoardGame moves={moves} squares={squares} xIsNext={xIsNext} onPlay={onPlay} sound={sound} setSound={setSound}/>)}
        {(status == 'X' || status == 'O' || status == 'V') && (<BoardFinish status={status} setStatus={setStatus} setCurrentMove={setCurrentMove}/>)}
      </div>
    </div>
  );
}