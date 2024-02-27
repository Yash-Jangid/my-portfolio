import React from 'react';
import '../Screens/common.css';

function Contactbuttons({ Value, className }) {
  return (
    <div>
      <button className={`bg-primary text-white py-2 px-4 rounded ${className}`}>{Value}</button>
    </div>
  );
}

function Clickme({ Value }) {
  return (
    <div>
      <button className="bg-primary text-light text-1xl py-2 px-4 rounded">{Value}</button>
    </div>
  );
}

export { Contactbuttons, Clickme };
