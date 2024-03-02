import React, { useState } from "react";
import { initialTabs as tabs } from "./ingredients.js";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioComponent() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="">
            <div className="PortfolioComponent-window">
                <style>
                    {`
          .PortfolioComponent-window {
            border-radius: 10px;
            background: white;
            overflow: hidden;
            
            display: flex;
            flex-direction: column;
          }
          
          nav {
            background: #fdfdfd;
            padding: 5px 5px 0;
            border-radius: 10px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom: 1px solid #eeeeee;
            height: 44px;
            align-self: center;
            display: flex;
          }
          
          .PortfolioComponent-ul {
            flex-grow: 1;
            display: flex;
            aline-self: center;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-size: 14px;
          }
          
          .PortfolioComponent-li {
            border-radius: 5px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;            
            padding: 10px 15px;          
            background: white;
            cursor: pointer;
            height: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;            
            user-select: none;
          }
          
          .PortfolioComponent-underline {
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 1px;
            {/* background: var(--accent); */}
          }
          
          .PortfolioComponent-li.selected {
            background: #eee;
          }
          
          .PortfolioComponent-li button {
            width: 20px;
            height: 20px;
            border: 0;
            background: #fff;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            stroke: #000;
            margin-left: 10px;
            cursor: pointer;
            flex-shrink: 0;
          }
          
          .PortfolioComponent-main {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-grow: 1;
            user-select: none;
          }
          
          .PortfolioComponent-add-item {
            width: 30px;
            height: 30px;
            background: #eee;
            border-radius: 50%;
            border: 0;
            cursor: pointer;
            align-self: center;
          }
          
          .PortfolioComponent-add-item:disabled {
            opacity: 0.4;
            cursor: default;
            pointer-events: none;
          }
        `}
                </style>
                <nav>
                    <ul className="PortfolioComponent-ul">
                        {tabs.map((item) => (
                            <li
                                key={item.label}
                                className={item === selectedTab ? "selected" : "PortfolioComponent-li"}
                                onClick={() => setSelectedTab(item)}
                            >
                                {`${item.icon} ${item.label}`}
                                {item === selectedTab ? (
                                    <motion.div className="PortfolioComponent-underline" layoutId="underline" />
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </nav>
                <main className="bg-transprint_primary PortfolioComponent-main">
                    <AnimatePresence mode="wait">
                        {selectedTab ? (
                            <motion.div
                                key={selectedTab.label}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* Render projects based on the selected tab */}
                                {selectedTab.map((project) => (
                                    <div key={project.projectName}>
                                        <h3>{project.projectName}</h3>
                                        <p>{project.projectDescription}</p>
                                        <img src={require(`../Assets/${project.projectImage}`)} alt={project.projectName} />
                                        <a href={project.projectLink} target="_blank" rel="noopener noreferrer">Visit Project</a>
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
        </div>
    );
}
