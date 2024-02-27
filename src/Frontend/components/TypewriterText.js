import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const TypewriterExample = () => {
    const options = {
        strings: ['Mobile application ', 'Web application ',],
        autoStart: true,
        loop: true,
    };

    const handleInit = (typewriter) => {
        typewriter
            .pauseFor(2000)
            .pause(1000)
            .deleteChars(14)
            .start();
    };

    return (
        <div className="">
            <div className="py-1 md:py-3 lg:py-5">
                <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold'>
                    Build Design&nbsp; 
                </h1>
                <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold flex items-center my-2"> 
                    and&nbsp;
                    <span className='text-3xl md:text-2xl lg:text-5xl text-primary'>
                        <TypewriterComponent options={options} onInit={handleInit} />
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default TypewriterExample;
