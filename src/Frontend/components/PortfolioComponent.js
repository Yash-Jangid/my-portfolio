import React, { useState } from "react";
import { initialTabs, initialTabs as tabs } from "./ingredients.js";
import { motion, AnimatePresence } from "framer-motion";
import "../Screens/common.css";

export default function PortfolioComponent() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="">
      <div className="PortfolioComponent-window">
        <nav className="w-full py-4 flex justify-center">
          <ul className="flex space-x-4">
            {initialTabs.map((tab, index) => (
              <li
                key={index}
                className={`py-2 px-2 lg:px-4 rounded ${tab === selectedTab ? "bg-gray-300" : "bg-white"} cursor-pointer`}
                onClick={() => setSelectedTab(tab)}
              >
                {index === 0 ? "All Projects" : tab[0].category}
                {tab === selectedTab && <div className="w-full h-1 bg-orange-500 rounded-t-md" />}
              </li>
            ))}
          </ul>
        </nav>

        <main className="PortfolioComponent-main flex justify-center">
          <AnimatePresence mode="wait">
            {selectedTab ? (
              <motion.div
                key={selectedTab.label}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="PortfolioComponent-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {selectedTab.map((project, index) => (
                  <div key={index} className="father w-full md:w-1/2 lg:w-1/4 ">
                    <div className="front bg-light rounded p-6">
                      <div className="header rounded-t-md">
                        <img src={require(`../Assets/${project.projectImage}`)} alt={project.projectName} className="w-full" />
                      </div>
                      <p className="text-base leading-6 mt-4 text-primary text-left">{project.projectName}</p>
                      <p className="text-base text-secondary text-left ">{project.projectDescription}</p>
                      {/* <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">Live</button> */}
                    </div>
                    <div className="rounded p-6 back">
                      <div className="flex justify-center align-middle items-center mb-4">
                        {project.category.includes('Mobile') ? (
                          <a href="#"><img className="S_icons" src={require('../Assets/google-play.png')} alt="Google Play" /></a>
                        ) : (
                          <a href="#"><img className="S_icons" src={require('../Assets/planet.png')} alt="Internet" /></a>
                        )}
                        <a href={project.github}><img className="S_icons" src={require('../Assets/github.png')} alt="Github" /></a>
                        <a target="_blank" href='https://www.linkedin.com/in/mr-yash-jangid/'><img className="S_icons" src={require('../Assets/linkedin.png')} alt="LinkedIn" /></a>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-center"
              >
                No projects found for the selected tab.
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
