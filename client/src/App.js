import React, {useState, useEffect} from 'react';
import './App.css';
import Board from './components/Board/Board';

import initilizeDeck from './components/Deck/Deck'



export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])

  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickyCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    return flippedCard.type == clickyCard.type
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }


  const handleClick = (id) =>{
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardClicked(id)) return 
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 1000)
      }
    }
    
  }
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setCards(initilizeDeck())
  }, [])
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="mainHead">React Memory Game</h1>
          </div>
        </div>
      </div>
      <div className="container" id="boarder">
        <div className="col-lg-12">
          {/* Game goes below */}
        <Board
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}
          disabled={disabled}
          solved={solved}
        />
        </div>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-lg-12">
          <h3 className="desc">Can you match the right cards ?</h3>
        </div>
      </div>
      </div>
      
    </div>
  );
}


