import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const ClearButton = () => {
  const { clearDisplayHandler } = useContext(NumberContext);
  return (
    <button type="button" onClick={clearDisplayHandler}>
      C
    </button>
  );
};

export default ClearButton;
