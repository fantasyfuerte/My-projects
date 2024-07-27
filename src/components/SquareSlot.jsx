import confetti from "canvas-confetti";
import { checkWinner, checkEndGame } from "../logic/board";
import {TURNS} from '../constants'

export const SquareSlot = ({ children, index, isSelected,board,setBoard,turn,setTurn,winner,setWinner }) => {


  const updateBoard = (index) => {
    //Verificar que la partida siga
    //y que haya espacio en el square
    if (board[index] || winner) return;
    //Colocar el simbolo adentro
    const newBoard = board;
    newBoard[index] = turn;
    setBoard(newBoard);
    //Cambiar de turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //Guardar Partida
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);
    //Verificar el final de la partida
    const newWinner = checkWinner(newBoard);

    if (newWinner) {
      setWinner((prevWinner) => {
        confetti({
          particleCount: 300,
        });
        console.log(`El ganador es ${newWinner}`);
        return newWinner;
      });
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

    const handleClick = () => {
      updateBoard(index);
    };
  
    const className = `square ${isSelected && "is-selected"}`;
    return (
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    );
  };