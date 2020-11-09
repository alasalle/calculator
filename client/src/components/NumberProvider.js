import React, { useState } from "react";

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const [number, setNumber] = useState("");
  const [storedNum, setStoredNum] = useState("");
  const [functionType, setFunctionType] = useState("");

  const displayValueHandler = (newNum) => {
    if (!number.includes(".") || newNum !== ".") {
      setNumber(`${(number + newNum).replace(/^0+/, "")}`);
    }
  };

  const storedValueHandler = () => {
    setStoredNum(number);
    setNumber("");
  };

  const clearDisplayHandler = () => {
    setNumber("");
    setStoredNum("");
    setFunctionType("");
  };

  const functionTypeHandler = (type) => {
    if (number) {
      setFunctionType(type);
      storedValueHandler();
    }
    if (storedNum) {
      setFunctionType(type);
    }
  };

  const doMath = () => {
    if (number && storedNum) {
      switch (functionType) {
        case "+":
          setStoredNum(
            `${
              Math.round(
                `${(parseFloat(storedNum) + parseFloat(number)) * 100}`
              ) / 100
            }`
          );
          break;
        case "-":
          setStoredNum(
            `${
              Math.round(
                `${(parseFloat(storedNum) - parseFloat(number)) * 1000}`
              ) / 1000
            }`
          );
          break;
        case "/":
          setStoredNum(
            `${
              Math.round(
                `${(parseFloat(storedNum) / parseFloat(number)) * 1000}`
              ) / 1000
            }`
          );
          break;
        case "x":
          setStoredNum(
            `${
              Math.round(
                `${parseFloat(storedNum) * parseFloat(number) * 1000}`
              ) / 1000
            }`
          );
          break;
        default:
          break;
      }
      setNumber("");
      setFunctionType("");
    }
  };

  return (
    <NumberContext.Provider
      value={{
        displayValueHandler,
        doMath,
        functionType,
        clearDisplayHandler,
        functionTypeHandler,
        storedValueHandler,
        storedNum,
        number,
        setNumber,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
