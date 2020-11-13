import React, { useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Switch, Radio, Button } from 'antd';

import { NumberContext } from '../context/NumberProvider';
import { SettingsContext } from '../context/SettingsProvider';

const Menu = () => {
  let { number } = useContext(NumberContext);
  let {
    darkMode,
    setMode,
    font,
    setFont,
    options,
    unit1,
    setUnit1,
    unit2,
    setUnit2,
    conversionOptions,
    handleConversion,
  } = useContext(SettingsContext);

  return (
    <nav>
      <Menu>
        <div className='menu-item'>
          <h3>Dark Mode</h3>
          <Switch
            onChange={() => (darkMode ? setMode(false) : setMode(true))}
          />
        </div>

        <div className='menu-item'>
          <h3>Font</h3>
          <Radio.Group
            options={options}
            onChange={(e) => setFont(e.target.value)}
            value={font}
            size='small'
            optionType='button'
          />
        </div>
        <div className='menu-item conversion'>
          <h3>Conversion Tool</h3>
          <h4>1st Unit</h4>
          <Radio.Group
            options={conversionOptions}
            onChange={(e) => setUnit1(e.target.value)}
            value={unit1}
            size='small'
            className='firstUnit'
            optionType='button'
          />
          <h4>2nd Unit</h4>
          <Radio.Group
            options={conversionOptions}
            onChange={(e) => setUnit2(e.target.value)}
            value={unit2}
            size='small'
            className='secondUnit'
            optionType='button'
          />
          <Button
            disabled={number === '0' || number === '' ? true : false}
            type='primary'
            size='small'
            onClick={() => handleConversion()}
          >
            Convert
          </Button>
        </div>
      </Menu>
    </nav>
  );
};

export default Menu;
