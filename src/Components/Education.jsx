// import React from 'react'

// const Education = () => {
//   return (
//     <div>Education</div>
//   )
// }

// export default Education

import React from 'react';


const Education = () => {
    return (
        
        <section className="Education-type" id='Qualification'>
            <h1 style={{color:'orange' }}>Qualification</h1>
            <div className="Education-detail Education-show Education-box">
                {/* first part */}
                
                <div className="bottom-margin">
                    <p className="Education-title">BCA(Bachelor of Computer Applications)</p>
                    <p className="Education-subtitle">Abeda Inamdar Senior College of Arts, Science and Commerce Azam Campus Camp Pune Maharashtra</p>
                    <div className="Education-calender">
                        <i className="uil uil-calendar-alt"></i>
                        <span>2019 - 2022</span>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress-bar-circle"></div>
                    <div className="progress-bar-line"></div>
                </div>
                <div className="bottom-margin">
                    {/* Empty Div */}
                </div>

                {/* second part */}
                <div className="bottom-margin">
                    {/* Empty Div */}
                </div>
                <div className="progress-bar">
                    <div className="progress-bar-circle"></div>
                    <div className="progress-bar-line"></div>
                </div>
                <div className="bottom-margin">
                    <p className="Education-title">Secondary School</p>
                    <p className="Education-subtitle">Poona College of Arts, Science and Commerce Camp Pune</p>
                    <div className="Education-calender">
                        <i className="uil uil-calendar-alt"></i>
                        <span>2017 - 2019</span>
                    </div>
                </div>

                {/* third part */}
                <div className="bottom-margin">
                    <p className="Education-title">Primary School</p>
                    <p className="Education-subtitle">Shreemati Shantatai Athavale Primary School Kothrud Pune </p>
                    <div className="Education-calender">
                        <i className="uil uil-calendar-alt"></i>
                        <span>10th Complete 2017</span>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress-bar-circle"></div>
                </div>
                <div className="bottom-margin">
                    {/* Empty Div */}
                </div>
            </div>
        </section>
    );
}

export default Education;