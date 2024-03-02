import React, { useState, useEffect, useRef } from 'react';
import { Clickme } from '../components/buttons';
import CounterComponent from '../components/counterComponent';
import Ticktext from '../components/Ticktext';
import { motion } from 'framer-motion';

function Aboutme(props) {
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
    <div
      className='bg-grey flex justify-center lg:items-center md:items-center md:py-10'
      ref={aboutRef}
    >
      <div className='w-11/12 md:w-11/12 lg:w-4/5 flex items-center justify-evenly'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className='flex md:w-1/3 bg-white md:items-center md:justify-center rounded-2xl overflow-hidden shadow-xl mr-6'
        >
          <img src={require('../Assets/yash-Profile1.png')} alt="hero-banner" className='' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Starting from the right side
          animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
          transition={{ duration: 1 }}
          className='w-3/5 mt-8 text-left z-10'
        >
          <span className='flex items-center'>
            <img src={require('../Assets/orangeDot.png')} alt="line" className='w-5 h-5 mr-1' />
            <h5 className='text-md font-second'>About me</h5>
          </span>
          <h1 className="font-bold text-6xl mb-8">I Can Build Anything You Want</h1>
          <p className='mb-8 leading-loose font-light tracking-wide'>I am a Full Stack Developer with a passion for creating beautiful and functional user experiences. I have a strong foundation in web development and have a good understanding of modern web technologies. I am a quick learner and a team player who is always eager to learn new technologies and frameworks. I am a self-motivated individual who is always looking for new challenges and opportunities to grow.</p>
          <div className='flex justify-between lg:w-3/5 '>
            <CounterComponent value={200} title='Complete Project' image={'aboutIconOne'} />
            <CounterComponent value={10} title='Years of Experience' image={'aboutIconTwo'} />
          </div>
          <div className='flex flex-wrap py-2 lg:w-3/5 md:w-3/4 pt-10' >
            <Ticktext content={'React.js'} />
            <Ticktext content={'React native'} />
            <Ticktext content={'Node.js'} />
            <Ticktext content={'MongoDB'} />
          </div>
          <div className='flex pt-5'>
            <Clickme Value={'Contact me'} />
            <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer" className='hidden md:block ml-4'> <img src={require('../Assets/mail.png')} alt="mail" className='w-8' /></a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Aboutme;
