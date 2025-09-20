import styles from './style.module.css'

import jogoDaVelha from '../../assets/jogoDaVelha.png'
import { Button } from 'react-bootstrap'

export default function BoardStart({setStatus}) {
    return(
        <div className={styles.startDiv}>
            <img src={jogoDaVelha} alt="jogo da velha" />
            <Button variant='primary' onClick={() => setStatus('J')}> Iniciar </Button>
        </div>
    )
}