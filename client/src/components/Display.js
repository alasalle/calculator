import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const Display = () => {
  const { number, storedNum, functionType } = useContext(NumberContext);

  const longNumHandler = (num) => {
    console.log({ NUM: num, LENGTH: num.length });
    let number = num.length > 10 ? parseFloat(num).toExponential(5) : num;
    return number;
  };

  return (
    <div>
      <h1>
        {!number.length && !storedNum
          ? '0'
          : longNumHandler(number) || longNumHandler(storedNum)}
      </h1>
      <p>
        {!storedNum
          ? ''
          : `${longNumHandler(storedNum)} ${functionType} ${longNumHandler(
              number
            )}`}
      </p>
    </div>
  );
};

export default Display;
