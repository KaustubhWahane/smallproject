import React from 'react';
import worldLogo from '../Images/wordLogo.jpeg';

function Data(props) {
  return (
    <div className='outerborder'>
        <nav>
            <img src={worldLogo} alt='Error 404' className="world" /><p>My Travel Journals</p>
        </nav>
        <div className="insideBox">
          <img src={props.image} alt='Error 4069' className='insideImage'/>
          <h3 className='title'> {props.title}</h3>
          <p className='start'>{props.startDate}</p>
          <p className='end'>{props.endDate}</p>
          <p className='Description'>{props.locationDescription}</p>
        </div>
    </div>
  )
}

export default Data;
