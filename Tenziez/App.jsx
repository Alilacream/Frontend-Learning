import { useRef, useState, useEffect } from "react"
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {
  const quickPress = useRef(null)
  console.log(quickPress)
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
    if (gameDone) {
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
  const gameDone = dice.every(obj => obj.isHeld === true && obj.value === dice[1].value)
  // making the keyboard only users focus the new game button directly without multi tabing
  useEffect(() => {
    if (quickPress.current === null) {
      return
    }
    quickPress.current = quickPress.current.focus()
  }, [gameDone])
  // checking if the quickPress ref should contain the DOM element of button
  // if the game is done, then the tabClick will be active once the useEffect is ran
  const tabClick = gameDone ? quickPress : null
  return (

    <main>
      <h1>{gameDone ? "Try New Game ?" : "Tenziez"}</h1>
      <p>A game that made me understand a bit how to handle myself with useRef, useState, and useEffect, mohime bs7a l game hak 9cheb shiwiya</p>
      {gameDone && <h2>Congrats 🥳✅💯</h2>}
      <div className="dice-container">
        {diceElements}
      </div>
      <button ref={tabClick} className="roll-dice" onClick={rollDice}>{gameDone ? "New Game" : "Roll"}</button>
    </main>
  )
}
