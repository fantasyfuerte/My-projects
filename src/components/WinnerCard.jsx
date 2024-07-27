import {SquareSlot} from './SquareSlot'

export function WinnerCard({winner,resetGame}) {
  return (
        <section className="winner">
          <div className="text">
            <h2>{winner == false ? "Empate" : `Ganó`}</h2>
            <header>{winner && <SquareSlot>{winner}</SquareSlot>}</header>
            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
  )
}
