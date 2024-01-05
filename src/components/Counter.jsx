import React from 'react'

const Counter = ({counterText, number, eventColor}) => {
  return (
    <div className='counter'>
        <p className='counter-number' style={{backgroundColor: eventColor}}>{number}</p>
        <h3 className='counter-text' style={{color: eventColor}}>{counterText}</h3>
    </div>
  )
}

export default Counter