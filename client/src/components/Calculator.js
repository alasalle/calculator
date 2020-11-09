import React from 'react';
import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import ClearButton from './ClearButton';
import Display from './Display';
import EqualButton from './EqualButton';


const Calculator = () => {

    return (
        <div>
        <Display />
        <div className='buttonPad'>
            <ClearButton />
            <FunctionButton buttonValue='/' />
            <FunctionButton buttonValue='x' />
            <NumberButton buttonValue={7} />
            <NumberButton buttonValue={8} />
            <NumberButton buttonValue={9} />
            <FunctionButton buttonValue='-' />
            <NumberButton buttonValue={4} />
            <NumberButton buttonValue={5} />
            <NumberButton buttonValue={6} />
            <FunctionButton buttonValue='+' />
            <NumberButton buttonValue={1} />
            <NumberButton buttonValue={2} />
            <NumberButton buttonValue={3} />
            <div className='equalButton'>
                <EqualButton />
            </div>
            <div className="zeroButton">
        <NumberButton buttonValue={0} />
      </div>
      <NumberButton buttonValue="." />

        </div>
    </div>
    )
}

export default Calculator