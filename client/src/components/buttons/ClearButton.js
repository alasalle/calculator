import React, { useContext } from 'react';
import { NumberContext } from '../../context/NumberProvider';

const ClearButton = () => {
  const { clearDisplayHandler } = useContext(NumberContext);
  return (
    <div className='buttonContainer clearButtonContainer'>
      <button
        type='button'
        className='clearButton'
        onClick={clearDisplayHandler}
      >
        <div className='buttonText'>C</div>
      </button>
    </div>
  );
};

export default ClearButton;
