import { useState } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {
  // state that returns an array of 10 random dices
  const [dice, setDice] = useState(generateAllNewDice())
  // func that'll generate 10 random dices
  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: randDice(),
        isHeld: false,
        id: nanoid()
      }))
  }
  // gives random number for one dice
  function randDice() {
    return Math.floor(Math.random() * 7)
  }

  // role all dices
  function rollDice() {
    // if the game is won, we can make a new game using the same function
    if (checkGame) {
      setDice(generateAllNewDice())
      return
    }
    // role specific dices that have isheld false
    setDice(prev => {
      return prev.map(obj => obj.isHeld ?
        obj :
        { ...obj, value: randDice() }
      )
    })
  }
  // A hold function for an onClick event: the number of a certain Dice is locked 
  const hold = (id) => {
    setDice(oldArr => {
      return oldArr.map(element => element.id === id ?
        { ...element, isHeld: !element.isHeld } :
        element
      )
    })
  }
  // dice elements that'll rendre in DOM
  const diceElements = dice.map(dieObj =>
    <Die key={dieObj.id}
      value={dieObj.value}
      held={dieObj.isHeld}
      toggle={hold}
      id={dieObj.id}
    />)
  // check if all dices have the same numbers and they're held
  const checkGame = dice.every(obj => obj.isHeld === true && obj.value === dice[1].value)
  return (
    <main>
      {chcek && <h1>Congrats 🥳✅💯</h1>}
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>{checkGame ? "New Game" : "Roll"}</button>
    </main>
  )
}
