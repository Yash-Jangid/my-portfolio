import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cards({ title, description, logo, index }) {
    const aboutRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = aboutRef.current;
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            // Calculate when the section is in the middle of the viewport
            const isMiddle = rect.top <= windowHeight && rect.bottom >= windowHeight / 2;
            setIsInView(isMiddle);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate the initial position based on the index
    const initialY = index % 2 === 0 ? -50 : 50;

    const variants = {
        hidden: { opacity: 0, y: initialY }, // Starts from top or bottom based on index
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="mb-8 w-4/5 md:w-1/2  md:mx-2 md:my-4 lg:w-3/12 lg:mx-4 
            lg:my-6 border border-transprint_primary rounded-lg shadow p-4 md:p-6"
            ref={aboutRef}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5 }} // Adjust transition duration as needed
        >
            <img src={require(`../Assets/${logo}.png`)} alt="Logo" className="mx-auto" />
            <h5 className="mb-2 text-xl md:text-2xl font-second tracking-tight text-gray-900 pt-5">{title}</h5>
            <p className="mb-3 text-sm md:text-base leading-6 text-gray-500">{description}</p>
        </motion.div>

    );
}
