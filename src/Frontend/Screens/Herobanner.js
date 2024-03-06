import React from 'react';
import TypewriterExample from '../components/TypewriterText';
import { Contactbuttons } from '../components/buttons';
import { motion } from 'framer-motion';
import { useMediaQuery } from './Aboutme';

function Herobanner(props) {
    const isSmallScreen = useMediaQuery('(max-width: 767px)');
    return (
        <div className='flex items-center justify-center bg-light lg:min-h-screen md:min-h-screen'>
            <div className='lg:flex md:flex w-11/12 md:w-11/12 lg:w-4/5 md:items-center'>
                <motion.div
                    initial={{ opacity: 0, x: -150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-2/5 md:flex lg:justify-end items-center md:order-2 mb-8'>
                    <img src={require('../Assets/yash-Profile1.png')} alt="hero-banner" className='w-full lg:w-3/4' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='md:w-full lg:w-3/5 justify-center items-center text-center md:text-left md:order-1'>
                    <div className='flex' >
                        <img src={require('../Assets/orangeDot.png')} alt="line" className='w-5 h-5 mr-1' />
                        <h5 className='font-second text-left'>I'm Full Stack Developer!</h5>
                    </div>

                    <TypewriterExample />
                    <p className='text-sm md:text-md lg:text-lg text-left font-normal leading-7 tracking-widest text-#606060'>
                    Passionate and driven software developer skilled in MERN stack, HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Detail-oriented with expertise in API integration, responsive design, and cross-browser compatibility. Committed to crafting high-quality, user-centric websites tailored to client needs.
                    </p>
                    <Contactbuttons className='hidden md:block font-thin text-sm md:text-xl lg:text-2xl my-5' Value={'Download My CV'} Link={'../Assets/Yash_jangid.pdf'} />
                </motion.div>
            </div>
        </div>
    );
}

export default Herobanner;
