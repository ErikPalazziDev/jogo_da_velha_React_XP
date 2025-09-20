import styles from './style.module.css'
import jogadorXvenceu from '../../assets/jogadorXvenceu.png'
import jogadorOvenceu from '../../assets/jogadorOvenceu.png'
import jogoDaVelha from '../../assets/deuVelha.png'
import { Button } from 'react-bootstrap'

export default function BoardFinish({status, setStatus, setHistory, setCurrentMove}) {

    function handleRestart() {
        setCurrentMove(0);
        setStatus('J');
    }

    let imgSrc;

    if (status == 'X') {
        imgSrc = jogadorXvenceu
    } else if (status == 'O') {
        imgSrc = jogadorOvenceu
    } else {
        imgSrc = jogoDaVelha
    }

    return(
        <div className={styles.finish}>
            <img src={imgSrc}/>
            <Button variant='primary' onClick={handleRestart}> Reiniciar </Button>
        </div>
    )
}