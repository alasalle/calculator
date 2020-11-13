import React from 'react';

//created a hidden & disabled button so the grid stays consistent
const EmptyButton = () => {
  return (
    <div className='buttonContainer'>
      <button type='button' className='emptyButton' disabled></button>
    </div>
  );
};

export default EmptyButton;
