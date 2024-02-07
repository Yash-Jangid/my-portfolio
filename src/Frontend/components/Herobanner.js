import React from 'react';
import TypewriterExample from './TypewriterText';
function Herobanner(props) {
    return (
        <div className='container-herobanner' style={{alignItems:'center', justifyContent:"center", display: "flex"}}>
            <div className='section_herobanner' style={{display:'flex',width:'80%'}}> 
                <div style={{ width: '60%', margin: "auto", paddingTop: "15px", }}>
                    <h5 className='subtitle' style={{ fontWeight: 400, textTransform: 'uppercase',marginBottom:'1rem' }}>i am Full Stack Developer</h5>
                    <TypewriterExample />
                    <p style={{ fontSize: '14px',marginTop:'1rem' }}>
                        I am a passionate and driven software developer with experience in developing web applications using MERN stack. I have a strong foundation in web development, and I am constantly learning new technologies and staying up to date with the latest trends. I am skilled in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am also experienced in working with APIs, and I have a strong understanding of responsive design and cross-browser compatibility. I am a detail-oriented developer with a strong focus on user experience and accessibility, and I am committed to creating high-quality, performant websites that meet the needs of my clients and their users.
                    </p>
                    <button style={{ backgroundColor: 'white', color: '#Dd5529', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Get Started</button>

                </div>
                <div style={{ width: '40%' ,alignItems:'center',justifyContent:'center',display:'flex'  }}>
                    <img src={require('../Assets/yash-Profile1.png')} alt="hero-banner" style={{ width: '60%', }} />
                </div>
            </div>
        </div >
    );
}

export default Herobanner;