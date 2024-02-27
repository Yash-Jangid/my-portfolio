import React, { useState, useEffect } from 'react';

const CounterComponent = ({ value, title,image }) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < value) {
            const interval = setInterval(() => {
                setCounter((prev) => prev + 1);
            }, 100);

            return () => clearInterval(interval);
        } else {
            setCounter(value); // Ensure the counter doesn't exceed the provided prop value
        }
    }, [counter, value]);

    return (
        <div className='flex'>
            <span className='px-3 items-center py-2 '>
                <div className='flex md:justify-between justify-between text-4xl font-bold '>
                    <img src={require(`../Assets/${image}.png`)} alt="phone" className='mr-3' />
                    <div>
                        <p className='text-3xl font-extrabold text-primary'>
                            {counter}+
                        </p>
                        <p className='text-sm font-secondary uppercase'>{title}</p>
                    </div>
                </div>
            </span>
        </div>
    );
};

export default CounterComponent;
