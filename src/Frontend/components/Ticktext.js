import React from 'react';

const TickText = ({ content }) => {
  return (
    <div>
      <img src={require('../Assets/Checktick.svg')} alt="tick" className='w-5 h-5 mr-1' />
      {content}
    </div>
  );
};

export default TickText;