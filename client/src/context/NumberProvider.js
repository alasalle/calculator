import React, { useEffect, useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
  const [number, setNumber] = useState('');
  const [storedNum, setStoredNum] = useState('');
  const [functionType, setFunctionType] = useState('');
  const [log, setLog] = useState([]);

  useEffect(() => {
    //retrieves the history out of localStorage, parses it, and stores it
    let logged = localStorage.getItem('log');
    let parsed = logged ? JSON.parse(logged) : [];
    setLog(parsed);
  }, []);

  const storageHandler = (newLog) => {
    /*takes in new history entry, adds it to the array from localStorage 
    (if one exists), stores it in localStorage*/
    if (log) {
      let array = [...log, newLog];
      setLog(array);
      return localStorage.setItem('log', JSON.stringify(array));
    } else {
      let array = newLog;
      setLog(array);
      return localStorage.setItem('log', JSON.stringify(array));
    }
  };

  const displayValueHandler = (newNum) => {
    if (!number.includes('.') || newNum !== '.') {
      setNumber(`${(number + newNum).replace(/^0+/, '')}`);
    }
  };

  const storedValueHandler = () => {
    //new number comes in, is stored, number value cleared again
    setStoredNum(number);
    setNumber('');
  };

  const clearDisplayHandler = () => {
    setNumber('');
    setStoredNum('');
    setFunctionType('');
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
    /*does math with number and storedNumber based on function type, stores whole equation
    for the log in the display, sets the result as the new storedNumber, then clears
    the number and functionType */
    if (number && storedNum) {
      switch (functionType) {
        case '+':
          let sumPlus = parseFloat(storedNum) + parseFloat(number);
          storageHandler(`${storedNum} ${functionType} ${number} = ${sumPlus}`);
          setStoredNum(`${parseFloat(storedNum) + parseFloat(number)}`);
          break;
        case '-':
          let sumMinus = parseFloat(storedNum) - parseFloat(number);
          storageHandler(
            `${storedNum} ${functionType} ${number} = ${sumMinus}`
          );
          setStoredNum(`${parseFloat(storedNum) - parseFloat(number)}`);
          break;
        case '/':
          let sumDivide = parseFloat(storedNum) / parseFloat(number);
          storageHandler(
            `${storedNum} ${functionType} ${number} = ${sumDivide}`
          );
          setStoredNum(`${parseFloat(storedNum) / parseFloat(number)}`);
          break;
        case 'x':
          let sumTimes = parseFloat(storedNum) * parseFloat(number);
          storageHandler(
            `${storedNum} ${functionType} ${number} = ${sumTimes}`
          );
          setStoredNum(`${parseFloat(storedNum) * parseFloat(number)}`);
          break;
        default:
          break;
      }
      setNumber('');
      setFunctionType('');
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
        log,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
