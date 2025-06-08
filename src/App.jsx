import Player from "./components/Player"


function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">          
          <Player inicialName={"Player 1"} symbol={"X"}/>
          <Player inicialName={"Player 2"} symbol={"0"}/>                                  
        </ol>
        GAME BOARD
      </div>
    </main>
  )
}

export default App
