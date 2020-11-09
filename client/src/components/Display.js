import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const Display = () => {
    const {number, storedNum, functionType } = useContext(NumberContext);
    return (
        <div>
        <h1>{!number.length && !storedNum ? '0' : number || storedNum}</h1>
        <p>{!storedNum ? '' : `${storedNum} ${functionType} ${number}`}</p>
        </div>
    )
}

export default Display;