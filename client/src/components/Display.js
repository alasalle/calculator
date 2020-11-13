import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NumberContext } from '../context/NumberProvider';
import { CaretDownOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';

import '../../node_modules/antd/dist/antd.css';

const { Panel } = Collapse;

const Display = () => {
  const { number, storedNum, functionType, log } = useContext(NumberContext);

  const isPhone = useMediaQuery({
    query: '(max-device-width: 813px)',
  });
  const isTablet = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPC = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });

  const longNumHandler = (num) => {
    /*handles the length of the displayed answer. If it's too long, it gets displayed 
    in exponential form. The stored number isn't changed to allow for correct calculation.*/
    let number =
      num.length > 6
        ? isPC || isBigScreen
          ? num.length > 16
            ? parseFloat(num).toExponential(8)
            : num
          : !isPhone || isTablet
          ? num.length > 8
            ? parseFloat(num).toExponential(4)
            : num
          : parseFloat(num).toExponential(3)
        : num;
    return number;
  };

  return (
    <div className='display'>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretDownOutlined rotate={isActive ? 180 : 0} />
        )}
      >
        <Panel
          header={
            <div className='log'>
              <p>
                {!storedNum || !functionType || !number
                  ? ''
                  : `${longNumHandler(
                      storedNum
                    )} ${functionType} ${longNumHandler(number)}`}
              </p>
            </div>
          }
          key='1'
        >
          <ul className='logList'>
            {log && log.length
              ? log.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })
              : null}
          </ul>
        </Panel>
      </Collapse>
      <div className='result'>
        <h2>
          {!number.length && !storedNum
            ? '0'
            : longNumHandler(number) || longNumHandler(storedNum)}
        </h2>
      </div>
    </div>
  );
};

export default Display;
