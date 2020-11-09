import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const Display = () => {
    const {number} = useContext(NumberContext);
    return (
        <h1>{number}</h1>
    )
}

export default Display;