import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../Screens/Fstyle.css';
import { ReactComponent as WorkIcon } from '../Assets/work.svg';
import { ReactComponent as SchoolIcon } from '../Assets/school.svg';
import TimeLine_Element from './ExpericenceData'; // Assuming correct filename

export default function TimeLine() {
    let workIconStyle = { background: '#06d6a0' };
    let schoolIconStyle = { background: '#f9c74f' };

    // Styles
    const sectionTitleStyle = {
        fontFamily: "Poppins, sans-serif",
        fontSize: '1.5rem',
        marginBottom: '1rem',
        textAlign: 'center',
    };

    const sectionContentStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '95%',
    };

    const cardStyle = {
        margin: '0.5rem',
        borderRadius: '0.9rem',
        color: '#3f3f3f',
        // minWidth: '15rem',
        // maxWidth: '20rem',
        width: '32%'
    };

    const subTextStyle = {
        fontSize: '12px',
        // fontWeight: '400',
        margin: '0',
        color:'#8e8e8e'
    };

    const descriptionStyle = {
        margin: '0',
    };

    const verticalDividerStyle = {
        width: '2px',
        backgroundColor: '#ccc',
        margin: '0 0.5rem', // Adjust spacing as needed
    };

    const title = {
        fontSize: '1.2em',
        fontWeight: '500'
    };

    const skills_Cards = {
        // width: '%', // Adjust width to your preference
        display: 'flex',
        flexWrap: 'wrap', // Allow skills to wrap
        justifyContent: 'space-between',
    }
    const skillItemStyle = {
        flex: '0 0 48%', // Adjust as needed
        // marginBottom: '1px',
        fontSize: '12px',
        color:'#8e8e8e'
    }

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

                            <h2 style={sectionTitleStyle}>Education</h2>
                            <div style={sectionContentStyle}>
                                {element.data.education.map((item, index) => (
                                    <React.Fragment key={item.title}>
                                        {index > 0 && <div style={verticalDividerStyle}></div>}
                                        <div style={cardStyle}>
                                            <h3 style={title}>{item.title}</h3>
                                            {item.university && <p style={subTextStyle}>{item.university}</p>}
                                            {item.Duration && <p style={subTextStyle}>{item.Duration}</p>}
                                            {/* <p style={descriptionStyle}>{item.description}</p> */}
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
                            <h2 style={sectionTitleStyle}>Software Skills</h2>
                            <div style={sectionContentStyle}>
                                {element.data.softwareSkills.map((item, index) => (
                                    <React.Fragment key={item.title}>
                                        {index > 0 && <div style={verticalDividerStyle}></div>}
                                        <div style={cardStyle}>
                                            <h3 style={title}>{item.title}</h3>
                                            <div style={skills_Cards} className="skill-card">
                                                {item.nest_data.map(skill => (
                                                    <p key={skill} style={skillItemStyle}>{skill}</p>
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
                            <h2 style={sectionTitleStyle}>Experience</h2>
                            <div style={sectionContentStyle}>
                                {element.data.experience.map((item, index) => (
                                    <React.Fragment key={item.title}>
                                        {index > 0 && <div style={verticalDividerStyle}></div>}
                                        <div style={cardStyle}>
                                            <h3 style={{ ...title,  }}>{item.title}</h3>
                                            <div style={{display:'inline-flex',justifyContent:'space-between',width:'100%'}}>
                                                {item.Company && <p style={subTextStyle}>{item.Company}</p>}
                                                {item.Session && <p style={subTextStyle} >{item.Session}</p>}
                                            </div>
                                            <p style={{fontSize:'14px',paddingTop:'1rem'}}>{item.description}</p>
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
