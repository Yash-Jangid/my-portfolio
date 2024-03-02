import React, { useEffect, useRef, useState } from 'react';
import SmTitle from '../components/SmTitle';
import Cards from '../components/Cards';

function MyService() {
  const aboutRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = aboutRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Calculate when the section is in the middle of the viewport
      const isMiddle = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2;
      setIsInView(isMiddle);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className=" py-20 bg-gray-100 rounded-md shadow-md " ref={aboutRef}>
        <div className='w-11/12 md:w-11/12 lg:w-4/5 mx-auto' >
          <div className='align-middle text-center'>
            <SmTitle title={'My Services'} desTitle={'Services i Offer'} />
          </div>
          <div className='flex flex-row text-center justify-evenly py-10 '>
            <Cards title={'Web Developer'} description={`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`} logo={'serviceFour'} />
            <Cards title={'Mobile App'} description={`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`} logo={'serviceTwo'} />
            <Cards title={'App Development'} description={`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`} logo={'serviceSeven'} />
            <Cards title={'Wordpress Developer'} description={`is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`} logo={'serviceSix'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyService;
