import React from 'react'
import '../Screens/common.css';
function Contactbuttons({Value}) {
  return (
    <div style={{}}>
      <button className='Contactbutton'>{Value}</button>
    </div>
  )
}

function Clickme ({Value}) {
  return (
    <div style={{}}>
      <button className='clickMe'>{Value}</button>
    </div>
  )
}
// Path: src/Frontend/components/footer.js

export { Contactbuttons, Clickme };