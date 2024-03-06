import { useState } from 'react';
import { motion } from "framer-motion";
import { Contactbuttons } from '../components/buttons';
import logo from '../Assets/logo.svg';

const YourComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-11/12 justify-between md:w-11/12 lg:w-4/5 flex items-center mx-auto">
                <div className="order-1 w-1/2">
                    <img
                        style={{ height: "100px", transform: "scale(2)", alignItems: "center" }}
                        src={logo}
                        className="w-4/5"
                        alt="logo"
                    />
                </div>

                {/* <div className={`w-2/4 md:w-auto md:flex md:justify-center lg:justify-center ${isMenuOpen ? "" : "hidden"}`}>
            <button onClick={toggleMenu}></button>
          </div> */}
                <div className="order-2 flex">
                    <div className="flex items-center justify-end md:flex">
                        <Contactbuttons Value={"Contact Us"} />
                    </div>
                    <div className="flex items-center justify-end md:hidden">
                        <button onClick={toggleMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 flex items-center justify-end z-50">
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 bg-gray-800 bg-opacity-50"
                        onClick={toggleMenu}
                    ></motion.div>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-orange w-1/2 md:w-64 p-4 rounded-md absolute  h-full flex items-center justify-center"
                    >
                        <ul className="w-full text-white flex flex-col-reverse uppercase font-bold">
                            <li className="text-2xl items-center px-5 py-1 text-sm hover:border hover:border-white rounded-lg text-base">Blog</li>
                            <li className="text-2xl items-center px-5 py-1 text-sm hover:border hover:border-white rounded-lg text-base">Portfolio</li>
                            <li className="items-center text-2xl px-5 py-1 text-sm hover:border hover:border-white rounded-lg text-base">Services</li>
                            <li className="items-center text-2xl px-5 py-1 text-sm hover:border hover:border-white rounded-lg text-base">About</li>
                            <li className="items-center text-2xl px-5 py-1 text-sm hover:border hover:border-white rounded-lg text-base">Home</li>
                        </ul>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default YourComponent;