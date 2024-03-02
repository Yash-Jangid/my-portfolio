import React from 'react';

const TickText = ({ content }) => {
  return (
    <div className=' flex md:w-2/4 items-center'>
      <div className='w-2/12'>
        <img src={require('../Assets/tick.png')} alt="tick" className='w-5 h-5' />
      </div>
        {content}
    </div>
  );
};

export default TickText;
