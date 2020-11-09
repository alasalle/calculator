import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const NumberButton = ({ buttonValue }) => {
  const { displayValueHandler } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => displayValueHandler(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default NumberButton;
