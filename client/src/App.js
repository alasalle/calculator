import React from 'react';

import Calculator from './components/Calculator';
import NumberProvider from './context/NumberProvider';
import SettingsProvider from './context/SettingsProvider';

const App = () => (
  <NumberProvider>
    <SettingsProvider>
      <Calculator />
    </SettingsProvider>
  </NumberProvider>
);

export default App;
