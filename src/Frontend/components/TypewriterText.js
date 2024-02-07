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
        <div>
            <div style={{paddingBottom:'3vw 0'}}>
                <h1 style={{ fontSize:"4vw" }} >
                    Build Design&nbsp; </h1>
                    <h1  className="text-muted" style={{display:'flex',fontSize:'4vw'}}> 
                    and&nbsp;<span className='typewriter_text' style={{fontSize:'3vw',alignSelf:'center'}}><TypewriterComponent options={options} onInit={handleInit} /></span></h1>
                    
            </div>
        </div>

    );
};

export default TypewriterExample;
