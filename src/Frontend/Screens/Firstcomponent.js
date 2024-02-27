import { Contactbuttons, Clickme } from '../components/buttons';
import './common.css';

function Firstcomponent() {
  return (
    <div className="flex justify-center items-center" style={{}}>
      <div className="w-4/5 md:w-11/12 lg:w-4/5 flex items-center">
        <div className="w-1/4">
          <img src={require('../Assets/demologo.png')} className="w-4/5" alt="logo" />
        </div>
        <div className='flex w-2/4 justify-center'>
          <tr className=''>
            <td className=' items-center px-5 py-1 text-sm hover:bg-primary rounded-lg  text-base'>Home</td>
            <td className='px-5'>About</td>
            <td className='px-5'>Services</td>
            <td className='px-5'>Portfolio</td>
            <td className='px-5'>Blog</td>
          </tr>
        </div>
        <div className='flex w-1/4 items-center justify-end'>
          <Contactbuttons Value={'Contact Us'} />
        </div>
      </div>
    </div>
  );
}

export default Firstcomponent;