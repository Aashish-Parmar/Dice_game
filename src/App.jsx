import { useState } from "react"
import StartGame from "./Components/StartGame"
import GamePlay from "./Components/GamePlay";



function App() {
const [IsGameStarted, setIsGameStarted] = useState(false)

const ToggleGamePlay = () => {
  setIsGameStarted((prev) => !prev)
};
  return (
    <>
    {
      IsGameStarted ? <GamePlay/> :  <StartGame
      toggle={ToggleGamePlay}
      />
    }
   
    </>
  )
}

export default App
