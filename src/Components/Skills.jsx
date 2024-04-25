// import React from 'react'
// import skills from './data/skills.json'

// const Skills = () => {
//   return (
//     <>

//       <div className=" container skills">
//         <h1>Skills</h1>
//         <div className='items' >
//           {skills.map((data) => (
//             <>

//               <div className="item" key={data.id}>

//                 <img id='pic2' src={`/assits/${data.imageSrc}`} alt='' />
//                 <h3>{data.title}</h3>
//               </div>

//             </>
//           ))}
//         </div>
//       </div>

//     </>
//   );
// };

// export default Skills




// Skills.js

import React from 'react';
import skills from './data/skills.json';
const Skills = () => {
  return (
    <div className="container skills" id='skills'>
      <h1 style={{color:'yellow' }}>Skills</h1>
      <div className='items'>
        {skills.map((data) => (
          <div className="item" key={data.id}
            data-aos="flip-left" data-aos-duration="1000"
          >
            <img id='pic2' src={`/assits/${data.imageSrc}`} alt={data.title} />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
