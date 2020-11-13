import React, { useContext } from 'react';
import { NumberContext } from '../../context/NumberProvider';

const EqualButton = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button className='equalsButton' type='button' onClick={doMath}>
      =
    </button>
  );
};

export default EqualButton;
