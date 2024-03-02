import React from 'react';
import TypewriterExample from '../components/TypewriterText';
import { Contactbuttons } from '../components/buttons';
import { motion } from 'framer-motion';

function Herobanner(props) {
    return (
        <div className='flex items-center justify-center bg-light pt-10 h-screen'>
            <div className='lg:flex md:flex w-11/12 md:w-11/12 lg:w-4/5 md:items-center'>
                <motion.div 
                    initial={{ opacity: 0, x: -150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='md:w-full lg:w-3/5 justify-center items-center text-center md:text-left'>
                    <h5 className='text-sm text-uppercase px-1'>I'm Full Stack Developer!</h5>
                    <TypewriterExample />
                    <p className='text-md'>
                        I am a passionate and driven software developer with experience in developing web applications using MERN stack. I have a strong foundation in web development, and I am constantly learning new technologies and staying up to date with the latest trends. I am skilled in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am also experienced in working with APIs, and I have a strong understanding of responsive design and cross-browser compatibility. I am a detail-oriented developer with a strong focus on user experience and accessibility, and I am committed to creating high-quality, performant websites that meet the needs of my clients and their users.
                    </p>
                    <Contactbuttons className={'font-thin text-xl my-5'} Value={'Download My CV'} Link={'../Assets/Yash_jangid.pdf'} />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-2/5 md:flex lg:justify-end items-center'>
                    <img src={require('../Assets/yash-Profile1.png')} alt="hero-banner" className='w-3/4 md:w-full lg:w-3/4' />
                </motion.div>
            </div>
        </div>
    );
}

export default Herobanner;
