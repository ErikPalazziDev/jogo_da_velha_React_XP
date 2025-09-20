import OIcon from '../../icons/OIcon';
import XIcon from '../../icons/XIcon';
import styles from './style.module.css'
import { Button } from "react-bootstrap";

export default function Square({ value, onSquareClick }) {
  return (
    <div className='btn-div'>
      <Button className={styles.squareBtn} variant="outline-secondary" size="lg" onClick={onSquareClick}>
          {value == 'X' ? <XIcon/>
          : value == 'O' && <OIcon/>}
      </Button>
    </div>


    // <button className="square" onClick={onSquareClick}>
    //   {value}
    // </button>
  );
}