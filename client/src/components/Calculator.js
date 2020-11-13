import React, { useContext } from 'react';
import { SettingsContext } from '../context/SettingsProvider';
import { useMediaQuery } from 'react-responsive';
import { FaDivide } from 'react-icons/fa';
import Display from './Display';
import Menu from './Menu';
import NumberButton from './buttons/NumberButton';
import FunctionButton from './buttons/FunctionButton';
import ClearButton from './buttons/ClearButton';
import EmptyButton from './buttons/EmptyButton';
import EqualButton from './buttons/EqualButton';

import '../../node_modules/antd/dist/antd.css';
import '../styles/styles.scss';

const Calculator = () => {
  let { font, darkMode } = useContext(SettingsContext);
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
  return (
    /*I changed the layout for landscape, so I have to conditionally render 
    the button pad depending on orientation*/
    <>
      {isLandscape ? (
        /*I've set the darkMode className on the top level so it's easy to control 
        the color pallete in all of the children*/
        <div
          className={`container landscape ${font} ${
            darkMode ? 'darkMode' : 'lightMode'
          }`}
        >
          <Menu />
          <div className='calcBox'>
            <div className='buttonPad'>
              <FunctionButton icon={<FaDivide />} buttonValue='/' />
              <FunctionButton buttonValue='x' />
              <FunctionButton buttonValue='-' />
              <FunctionButton buttonValue='+' />
              <ClearButton />
              <NumberButton buttonValue={9} />
              <NumberButton buttonValue={8} />
              <NumberButton buttonValue={7} />
              <NumberButton buttonValue={6} />
              <NumberButton buttonValue={5} />
              <NumberButton buttonValue={4} />
              <NumberButton buttonValue={3} />
              <NumberButton buttonValue={2} />
              <div className='equalButton'>
                <EqualButton />
              </div>
              <NumberButton buttonValue={1} />
              <div className='zeroButton landscape'>
                <NumberButton buttonValue={0} />
              </div>
              <NumberButton buttonValue='.' />
            </div>
            <Display />
          </div>
        </div>
      ) : (
        <div
          className={`container ${font} ${darkMode ? 'darkMode' : 'lightMode'}`}
        >
          <Menu />
          <Display />
          <div className='buttonPad'>
            <ClearButton />
            <EmptyButton />
            <FunctionButton icon={<FaDivide />} buttonValue='/' />
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
            <div className='zeroButton'>
              <NumberButton buttonValue={0} />
            </div>
            <NumberButton buttonValue='.' />
          </div>
        </div>
      )}
    </>
  );
};

export default Calculator;
