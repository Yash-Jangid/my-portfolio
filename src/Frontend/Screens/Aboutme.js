import React, { useState, useEffect, useRef } from 'react';
import { Clickme } from '../components/buttons';
import CounterComponent from '../components/counterComponent';
import Ticktext from '../components/Ticktext';
import { motion } from 'framer-motion';

// Custom hook for media queries
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener);
    } else {
      media.addListener(listener);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [matches, query]);

  return matches;
}

function Aboutme(props) {
  const aboutRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 767px)'); // Adjust the breakpoint as needed

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
    <div className='bg-grey flex justify-center lg:items-center md:items-center md:py-10' ref={aboutRef}>
      <div className='w-11/12 md:w-11/12 lg:w-4/5 flex flex-col md:flex-row items-center justify-evenly'>
        <motion.div
          initial={{ opacity: 0, x: isSmallScreen ? 0 : -100 }} // Adjust initial position based on screen size
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className='flex-shrink-0 w-full md:w-1/3 bg-white md:items-center md:justify-center rounded-2xl overflow-hidden shadow-xl mr-0 md:mr-6 mb-6 md:mb-0'
        >
          <img src={require('../Assets/yash-Profile1.png')} alt="hero-banner" className='w-full h-auto' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: isSmallScreen ? 0 : 100 }} // Adjust initial position based on screen size
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className='w-full md:w-2/3 mt-8 md:mt-0 text-center md:text-left z-10'
        >
          <span className='flex items-center'>
            <img src={require('../Assets/orangeDot.png')} alt="line" className='w-5 h-5 mr-1' />
            <h5 className='text-md font-second'>About me</h5>
          </span>
          <h1 className="font-bold text-left text-4xl md:text-6xl mb-4 md:mb-8">I Can Build Anything You Want</h1>
          <p className='mb-4 md:mb-8 leading-relaxed font-light text-left tracking-wide'>I am a Full Stack Developer with a passion for creating beautiful and functional user experiences. I have a strong foundation in web development and have a good understanding of modern web technologies. I am a quick learner and a team player who is always eager to learn new technologies and frameworks. I am a self-motivated individual who is always looking for new challenges and opportunities to grow.</p>
          <div className='flex my-8 w-full lg:w-6/12 justify-between'>
            <CounterComponent value={15} title='Complete Project' image={'aboutIconOne'} />
            <CounterComponent value={2} title='Years of Experience' image={'aboutIconTwo'} />
          </div>
          <div className='flex flex-wrap justify-between md:justify-center lg:justify-center '>
            <Ticktext content={'React.js'} />
            <Ticktext content={'React native'} />
            <Ticktext content={'Node.js'} />
            <Ticktext content={'MongoDB'} />
          </div>
          <div className='flex justify-center md:justify-start pt-5'>
            <Clickme Value={'Contact me'} />
            <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer" className='hidden md:block ml-4'><img src={require('../Assets/mail.png')} alt="mail" className='w-8' /></a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Aboutme;
