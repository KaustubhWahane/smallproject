import React from 'react';

function Data(props) {
  return (
       
        <div className="insideBox">
          <img src={props.image} alt='Error 4069' className='insideImage'/>
          <h3 className='title'> {props.title}</h3>
          <p className='start'>{props.startDate}</p>
          <p className='end'>{props.endDate}</p>
          <p className='Description'>{props.locationDescription}</p>
        </div>
  )
}

export default Data;
