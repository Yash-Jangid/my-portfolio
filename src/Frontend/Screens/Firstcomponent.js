import { Contactbuttons } from '../components/buttons';
import './common.css';

function Firstcomponent() {
  return (
    <div className="flex justify-center items-center" style={{}}>
      <div className="w-4/5 md:w-11/12 lg:w-4/5 flex items-center mx-auto">
        <div className="w-1/4">
          <img src={require('../Assets/demologo.png')} className="w-4/5" alt="logo" />
        </div>
        <div className='w-2/4'>
          <ul className='flex justify-center'>
            <li className='items-center px-5 py-1 text-sm hover:border hover:border-transprint_primary rounded-lg  text-base'>Home</li>
            <li className='items-center px-5 py-1 text-sm hover:border hover:border-transprint_primary rounded-lg  text-base'>About</li>
            <li className='items-center px-5 py-1 text-sm hover:border hover:border-transprint_primary rounded-lg  text-base'>Services</li>
            <li className='items-center px-5 py-1 text-sm hover:border hover:border-transprint_primary rounded-lg  text-base'>Portfolio</li>
            <li className='items-center px-5 py-1 text-sm hover:border hover:border-transprint_primary rounded-lg  text-base'>Blog</li>
          </ul>
        </div>
        <div className='flex w-1/4 items-center justify-end'>
          <Contactbuttons Value={'Contact Us'} />
        </div>
      </div>
    </div>
  );
}

export default Firstcomponent;