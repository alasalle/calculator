import React, {useContext} from 'react';
import {NumberContext} from './NumberProvider';

const FunctionButton = ({ buttonValue }) => {
  const { functionTypeHandler } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => functionTypeHandler(buttonValue)}>{buttonValue}</button>
  );
};

export default FunctionButton;