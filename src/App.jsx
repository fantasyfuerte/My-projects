import { useState } from "react";
import { SquareSlot } from "./components/SquareSlot";
import { TURNS } from "./constants";

import { WinnerCard } from "./components/WinnerCard";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ? turnFromStorage : TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  return (
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Resetear el juego</button>
        <section className="game">
          {board.map((_, index) => {
            return (
              <SquareSlot
                key={index}
                index={index}
                setBoard={setBoard}
                board={board}
                turn={turn}
                setTurn={setTurn}
                winner={winner}
                setWinner={setWinner}
              >
                {board[index]}
              </SquareSlot>
            );
          })}
        </section>
        <section className="turn">
          <SquareSlot isSelected={turn == TURNS.X}>{TURNS.X}</SquareSlot>
          <SquareSlot isSelected={turn == TURNS.O}>{TURNS.O}</SquareSlot>
        </section>
        {winner !== null && (
          <WinnerCard winner={winner} resetGame={resetGame} />
        )}
        <h3>Created by <span>@fantasy.fuerte</span></h3>
      </main>
  );
}

export default App;
