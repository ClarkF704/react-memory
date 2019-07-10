import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'
import backCard from '../../img/backk.png'

// Descructure in order to avoid having to say props all the time before calling attributes
export default function Card({ 
    handleClick, 
    id,
    type,
    front,
    solved,
    flipped,
    height, 
    width,
    disabled 
    }) {
        return (
            <div
              className={`flip-container ${flipped ? 'flipped' : ''}`}
              style={{
                width,
                height,
              }}
              onClick={() => disabled ? null :  handleClick(id)}
            >
              <div className='flipper'>
                <img
                  alt='card!'
                  className={flipped ? 'front' : 'back'}
                  src={flipped || solved ? type : backCard}
                  style={{ width, height }}
                />
              </div>
            </div>
          )
        }

    
    
Card.propTypes = {
    handleClick: PropTypes.func.isRequired,
    fid: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    front: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired
}
