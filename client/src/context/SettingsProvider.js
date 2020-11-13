import React, { useContext, useState } from 'react';

import { NumberContext } from './NumberProvider';

export const SettingsContext = React.createContext();

const SettingsProvider = (props) => {
  let { number, setNumber } = useContext(NumberContext);
  const [darkMode, setMode] = useState(false);
  const [font, setFont] = useState('Ubuntu');
  const [unit1, setUnit1] = useState('');
  const [unit2, setUnit2] = useState('');

  const options = [
    { label: 'Roboto', value: 'Roboto' },
    { label: 'Ubuntu', value: 'Ubuntu' },
    { label: 'Dosis', value: 'Dosis' },
  ];

  const conversionOptions = [
    { label: 'feet', value: 'feet' },
    { label: 'inches', value: 'inches' },
    { label: 'cm', value: 'cm' },
  ];

  /* Next 3 functions just provide the conversion rates for the conversion tool,
  do the math when called, and set the result as the number*/
  const handleFeetConversion = () => {
    if (unit1 && unit2) {
      switch (unit1) {
        case 'inches':
          setNumber(`${parseFloat(number) / 12}`);
          break;
        case 'cm':
          setNumber(`${parseFloat(number) / 30.48}`);
          break;
        default:
          break;
      }
    }
  };

  const handleInchesConversion = () => {
    if (unit1 && unit2) {
      switch (unit1) {
        case 'feet':
          setNumber(`${parseFloat(number) * 12}`);
          break;
        case 'cm':
          setNumber(`${parseFloat(number) / 2.54}`);
          break;
        default:
          break;
      }
    }
  };

  const handleCmConversion = () => {
    if (unit1 && unit2) {
      switch (unit1) {
        case 'inches':
          setNumber(`${parseFloat(number) * 2.45}`);
          break;
        case 'feet':
          setNumber(`${parseFloat(number) * 30.48}`);
          break;
        default:
          break;
      }
    }
  };

  //calls a conversion function based on what's being converted to
  const handleConversion = () => {
    if (unit1 && unit2) {
      switch (unit2) {
        case 'inches':
          handleInchesConversion();
          break;
        case 'feet':
          handleFeetConversion();
          break;
        case 'cm':
          handleCmConversion();
          break;
        default:
          break;
      }
    }
  };

  return (
    <SettingsContext.Provider
      value={{
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
        handleCmConversion,
        handleFeetConversion,
        handleInchesConversion,
        handleConversion,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
