import React, { useState } from "react";
import { initialTabs, initialTabs as tabs } from "./ingredients.js";
import { motion, AnimatePresence } from "framer-motion";
import "../Screens/common.css";

export default function PortfolioComponent() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="">
      <div className="PortfolioComponent-window">
        <nav>
          <ul className="PortfolioComponent-ul">
            {initialTabs.map((tab, index) => (
              <li
                key={index}
                className={tab === selectedTab ? "selected" : "PortfolioComponent-li"}
                onClick={() => setSelectedTab(tab)}
              >
                {index === 0 ? "All Projects" : tab[0].category} {/* Set tab title based on category */}
                {tab === selectedTab ? (
                  <motion.div className="PortfolioComponent-underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>


        <main className="PortfolioComponent-main">
          <AnimatePresence mode="wait">
            {selectedTab ? (
              <motion.div
                key={selectedTab.label}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="PortfolioComponent-grid"
              >
                {selectedTab.map((project, index) => (
                  <div key={index} className="father">
                    <div style={{}} className="front">
                      <div className="header">
                        <img src={require(`../Assets/${project.projectImage}`)} alt={project.projectName} />
                      </div>
                      <h3 className="headline">{project.projectName}</h3>
                      <p className="descriptionCard">{project.projectDescription}</p>
                      <button style={{ width: '30%', backgroundColor: '#ff6b00', borderRadius: '10px', fontSize: '5%' }} type="submit" name="aterial">
                        <i className="material-icons">Live</i>
                      </button>
                    </div>
                    <div style={{ backgroundColor: '#9999', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className="back">
                      <div style={{ display: 'flex', flexDirection: 'row', }} className="Social_icons">
                        <div>
                          {project.category.includes('Mobile') ?
                            <a href="#"><img className='S_icons' src={require('../Assets/google-play.png')} alt="Internet" /></a> :
                            <a href="#"><img className='S_icons' src={require('../Assets/planet.png')} alt="Internet" /></a>
                          }
                        </div>
                        <div>
                          <a href={project.github}><img className='S_icons' src={require('../Assets/github.png')} alt="Internet" /></a>
                        </div>
                        <div>
                          <a target="_blank" href='https://www.linkedin.com/in/mr-yash-jangid/'><img className='S_icons' src={require('../Assets/linkedin.png')} alt="Internet" /></a>
                        </div>
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
              >
                No projects found for the selected tab.
              </motion.div>
            )}
          </AnimatePresence>
        </main>


      </div>
    </div >
  );
}
