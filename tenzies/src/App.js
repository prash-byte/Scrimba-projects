
import './App.css';
import Die from './Die'
import { useEffect, useState } from 'react';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti'


function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

 useEffect(() => {
         
         const allHeld = dice.every(die => die.isHeld)
         const first = dice[0].value
         const sameVal = dice.every(die => die.value === first)
         if (allHeld && sameVal)
          {
            setTenzies(true)
          }
        }, [dice])

  function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}

  function allNewDice() {
   const newDice = []
   for (let i=0; i<10; i++)
    {
     newDice.push(generateNewDie())
    } 
   return newDice
  }

  const diceElements = dice.map(die => <Die value={die.value} key={die.id} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)

  function rollDice() {
     setDice(oldDice => oldDice.map(die =>
      {
       return die.isHeld ? die :
       generateNewDie()
      }
     )) 
  }

  function holdDice(id) {
    
     setDice(oldDice => oldDice.map(die => 
      {
        return die.id === id ?
           {...die, isHeld: !die.isHeld } :
            die 
      }
     ))
  }

  let rollBtn = tenzies ? "New Game" : "Roll"
  if (tenzies)
    {
      <Confetti />
    }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      {<button className='roll-btn' onClick={rollDice}>{rollBtn}</button>}
    </main>
  );
}

export default App;
