import React, { useState, useEffect } from 'react';
import { Clickme } from '../components/buttons';
import CounterComponent from '../components/counterComponent';
// import ticktext from '../components/Ticktext';
import Ticktext from '../components/Ticktext';

function Aboutme(props) {
    return (
        <div className='bg-grey flex justify-center lg:items-center md:items-center md:py-10'>
            <div className='w-11/12 md:w-11/12 lg:w-4/5 flex items-center justify-evenly'>
                <div className='flex md:w-1/3 bg-white md:items-center md:justify-center rounded-2xl overflow-hidden shadow-xl mr-6'>
                    <img src={require('../Assets/yash-Profile1.png')} alt="hero-banner" className='' />
                </div>
                <div className='w-3/5 mt-8 text-left z-10'>
                    <span className='flex items-center'>
                        <img src={require('../Assets/orangeDot.png')} alt="line" className='w-5 h-5 mr-1' />
                        <h5 className='text-md font-second'>About me</h5>
                    </span>
                    <h1 className="font-bold text-6xl mb-8">I Can Build Anything You Want</h1>
                    <p className='mb-8 leading-loose font-light tracking-wide'>I am a Full Stack Developer with a passion for creating beautiful and functional user experiences. I have a strong foundation in web development and have a good understanding of modern web technologies. I am a quick learner and a team player who is always eager to learn new technologies and frameworks. I am a self-motivated individual who is always looking for new challenges and opportunities to grow.</p>
                    <div className='flex justify-between '>
                        <CounterComponent value={200} title='Complete Project' image={'aboutIconOne'} />
                        <CounterComponent value={10} title='Years of Experience' image={'aboutIconTwo'} />
                    </div>
                    <div className='flex mt-8'>
                        <Ticktext content={'React.js'} />
                        <Ticktext content={'Node.js'} />
                    </div>

                    <div className='flex'>
                        <Clickme Value={'Conatct me'} />
                        <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer" className='hidden md:block ml-4'> <img src={require('../Assets/mail.png')} alt="mail" className='w-8' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutme;