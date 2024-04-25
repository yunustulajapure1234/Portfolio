import React from 'react';


const About = () => {
    return (
        <>
        <div className="ok"id="About me" ><h1 style={{color:'yellow' }}>About Me</h1></div>
        <section className="aboutsection" >
            <h1 className="text-center about-heading"></h1>
            <h1 style={{color:'orange' }} className="text-center intro-heading">My Introduction</h1>

            <div className="section-content section-content-grid grid section-content-gap" id="about-sub-section">
                <div className="bio-section">
                    <img src="./assits/hero/hero.avif" alt="" className="my-profile-img" data-tilt="" style={{ willChange: "transform", transform: "perspective(300px) rotateX(0deg) rotateY(0deg)" }} />

                    <div className="bio-text">
                        <p className="bio">
                        Hey there! 👋 I'm Yunus Tulajapure, a 24-year-old BCA graduate who is passionate about Front-End Development with a strong focus on creating engaging experiences. Proficient in HTML, CSS, and JavaScript with experience in modern frameworks like React. Detail-oriented and committed to delivering high-quality work, I am actively engaged in continuous learning to stay up-to-date with industry trends. I am currently enrolled in a MERN Stack course at Program Pathshala institute, which will be completed soon. I am seeking an opportunity to join a forward-thinking organization, contribute my skills, and grow professionally. ✍🏻

                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default About;
