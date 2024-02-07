import { Contactbuttons, Clickme } from '../components/buttons';
import './common.css';

function Firstcomponent() {
  return (
    <div className="container">
      <div className="header">
        <div className="logoContainer">
          <img src={require('../Assets/demologo.png')} className="logo" alt="logo" />
        </div>
        <div className='menu'>
          <tr className='nestedmenu'>
            <td>Home</td>
            <td>About</td>
            <td>Services</td>
            <td>Portfolio</td>
            <td>Blog</td>
          </tr>
        </div>
        <div className='contactinfo'>
          <Contactbuttons Value={'Contact Us'} />
        </div>
      </div>
    </div>
  );
}

export default Firstcomponent;