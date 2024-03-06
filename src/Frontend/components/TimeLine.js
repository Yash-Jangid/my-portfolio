import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../Screens/Fstyle.css';
import { ReactComponent as WorkIcon } from '../Assets/work.svg';
import { ReactComponent as SchoolIcon } from '../Assets/school.svg';
import TimeLine_Element from './ExpericenceData'; // Assuming correct filename
import './style.css'

export default function TimeLine() {
    let workIconStyle = { background: '#06d6a0' };
    let schoolIconStyle = { background: '#f9c74f' };


    return (
        <VerticalTimeline
            layout='1-column-left'
            animate={true}
            arrowColor="#328ae5"
            lineColor='#ff6b00'
        >
            {TimeLine_Element.map(element => (
                <div key={element.id}>

                    {element.data.education && (
                        <VerticalTimelineElement
                            dateClassName='date'
                            iconStyle={workIconStyle}
                            icon={<WorkIcon />}
                        >
                            <h1 className='text-4xl font-bold text-center mb-4 text-secondary'>Education</h1>
                            <div className='md:flex lg:flex items-center justify-between'>
                                {element.data.education.map((item, index) => (
                                    <React.Fragment key={item.title}>
                                        {index > 0 && <div className='w-full lg:w-px bg-gray-400 my-4'></div>}
                                        <div className='design justify-between'>
                                        <div className='w-full mb-6 md:mb-0 z-50'>
                                            <h3 className='text-lg font-semibold mb-1'>{item.title}</h3>
                                            {item.university && <p className='text-sm'>{item.university}</p>}
                                            {item.Duration && <p className='text-sm'>{item.Duration}</p>}
                                        </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </VerticalTimelineElement>
                    )}



                    {element.data.softwareSkills && (
                        <VerticalTimelineElement
                            dateClassName='date'
                            iconStyle={schoolIconStyle}
                            icon={<SchoolIcon />}
                        >
                            <h1 className='text-4xl font-bold text-center mb-4 text-secondary'>Software Skills</h1>
                            <div className='flex flex-wrap '>
                                {element.data.softwareSkills.map((item, index) => (
                                    <React.Fragment key={item.title}>
                                    {index > 0 && <div className='w-full lg:w-px bg-gray-400 my-4'></div>}
                                        <div className='w-full md:w-4/12 lg:w-18 p-4'>
                                            <h3 className='text-center text-xl font-bold mb-2'>{item.title}</h3>
                                            <div className="flex flex-wrap justify-center">
                                                {item.nest_data.map(skill => (
                                                    <p key={skill} className='text-sm py-1 px-2 bg-primary rounded-full text-white m-1'>{skill}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>
                        </VerticalTimelineElement>
                    )}
                    {element.data.experience && (
                        <VerticalTimelineElement
                            dateClassName='date'
                            iconStyle={workIconStyle}
                            icon={<WorkIcon />}
                        >
                            <h1 className='text-4xl font-bold text-center mb-4 text-secondary'>Experience</h1>
                            <div className='flex flex-col lg:flex-row justify-between'>
                                {element.data.experience.map((item, index) => (
                                    <React.Fragment key={item.title}>
                                        {index > 0 && <div className='w-full lg:w-px bg-gray-400 my-4'></div>}
                                        <div className='design justify-between'>
                                            <div className='w-full mb-6 z-50'>
                                                <h3 className='text-lg font-semibold mb-1'>{item.title}</h3>
                                                <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
                                                    {item.Company && <p className='text-xxs'>{item.Company}</p>}
                                                    {item.Session && <p className='text-xxs'>{item.Session}</p>}
                                                </div>
                                                <p className='text-sm'>{item.description}</p>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </div>

                        </VerticalTimelineElement>
                    )}
                </div>
            ))}
        </VerticalTimeline>
    );
}
