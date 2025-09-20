import { DropdownButton } from 'react-bootstrap';
import Square from '../Square';
import styles from './style.module.css';
import calculateWinner from "../../utils";
import windowsXpSound from '../../assets/windows-xp-startup.mp3'

export default function BoardGame({moves, squares, statusText, xIsNext, onPlay, sound, setSound}) {
    let audio = new Audio(windowsXpSound);

    if (sound == false) {
        audio.play();
        setSound(true);
    }

    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
        return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
        nextSquares[i] = 'X';
        } else {
        nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    statusText = 'Próximo jogador: ' + (xIsNext ? 'X' : 'O');

    return(
        <>  
            <div className={styles.status}>{statusText}</div>
            <div className={styles.row}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className={styles.row}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className={styles.row}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
            <div className={styles.btn}>
                <DropdownButton id="dropdown-item-button" title="Histórico de jogadas">
                    {moves}
                </DropdownButton>
            </div>
        </>
    )
}