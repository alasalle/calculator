import React, { useContext } from 'react';
import { NumberContext } from '../../context/NumberProvider';
//takes in button value (what kind of function selected, and sends it to NumberProvider)
const FunctionButton = (props) => {
  const { functionTypeHandler } = useContext(NumberContext);
  return (
    <div className='buttonContainer'>
      <button
        type='button'
        className='functionButton'
        onClick={() => functionTypeHandler(props.buttonValue)}
      >
        <div className='buttonText'>
          {props.icon ? props.icon : props.buttonValue}
        </div>
      </button>
    </div>
  );
};

export default FunctionButton;
