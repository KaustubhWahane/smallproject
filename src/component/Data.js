import React from 'react';
import worldLogo from '../Images/wordLogo.jpeg';

function Data() {
  
  return (
    <div className='outerborder'>
        <nav>
            <img src={worldLogo} alt='Error 404' className="world" /><p>My Travel Journals</p>
        </nav>
        <div className="insideBox">
          <img src='' alt='Error 4069' className='insideImage'/>
          <h3 className='title'>Hello</h3>
          <p className='start'>Start Date</p>
          <p className='end'>End Date</p>
          <p className='Description'>Lorem15</p>
        </div>
    </div>
  )
}

export default Data;
