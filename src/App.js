import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import Firstcomponent from './Frontend/Screens/Firstcomponent';
import Herobanner from './Frontend/Screens/Herobanner';
import Aboutme from './Frontend/Screens/Aboutme';
import MyService from './Frontend/Screens/MyService';
import Resume from './Frontend/Screens/Resume';
import Portfolio from './Frontend/Screens/Portfolio';


const sections = [
  { id: 'hero-banner', title: 'Hero Banner', component: <Herobanner /> },
  { id: 'about-me', title: 'About Me', component: <Aboutme /> },
  { id: 'MyService', title: 'My Service', component: <MyService /> },
  { id: 'resume', title: 'Resume', component: <Resume /> },
  { id: 'portfolio', title: 'Portfolio', component: <Portfolio /> },
];

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const onStepEnter = ({ data }) => {
    console.log('Entering step:', data);
    setCurrentStep(data);
    const nextSection = sections[data];
    if (nextSection) {
      if (data !== 0) {
        console.log('Scrolling to:', nextSection.id);
        document.getElementById(nextSection.id).scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      console.log('No next section found');
    }
  };

  return (
    <div>
      <Firstcomponent />
      <Scrollama onStepEnter={onStepEnter}>
        {sections.map((section, index) => (
          <Step key={section.id} data={index}>

            <section id={section.id}>
              {section.component}
            </section>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
};

export default App;
