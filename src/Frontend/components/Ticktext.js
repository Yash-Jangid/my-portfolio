import React from 'react';

const TickText = ({ content }) => {
  return (
    <div className=' flex md:w-2/4 items-center '>
      <div className='w-4 mr-2'>
        <img src={require('../Assets/tick.png')} alt="tick" className='' />
      </div>
        {content}
    </div>
  );
};

export default TickText;
