import React, { useContext } from 'react';
import { NumberContext } from '../../context/NumberProvider';
//just like function button, takes in number selected and sends to NumberProvider
const NumberButton = ({ buttonValue }) => {
  const { displayValueHandler } = useContext(NumberContext);
  return (
    <div className='buttonContainer'>
      <button
        type='button'
        className='numberButton'
        onClick={() => displayValueHandler(buttonValue)}
      >
        <div className='buttonText'>{buttonValue}</div>
      </button>
    </div>
  );
};

export default NumberButton;
