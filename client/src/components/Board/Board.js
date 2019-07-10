import React from 'react';
import PropTypes from 'prop-types';


import Card from '../Card/Card';

// Destructuring to avoid props before each value
export default function Board({ disabled, cards, flipped, handleClick, solved  }) {
    return(
        <div className="oneBoard">
            {
                cards.map((card) => (
                    <Card
                    key={card.id}
                    id={card.id}
                    width={150}
                    height={200}
                    type={card.type}
                    flipped={flipped.includes(card.id)}
                    solved={solved.includes(card.id)}
                    handleClick={handleClick}
                    disabled={disabled || solved.includes(card.id)}
                />
                ))
            }
        </div>
    )
}
Board.propTypes = {
    disabled: PropTypes.bool.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({ })).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,

}