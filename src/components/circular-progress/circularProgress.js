



import React from 'react';
import './circularProgress.css'

const CircularProgress = ({text}) => (
<>
<div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle">{text}</div>
        </div>
      </div>
</>
);

export default CircularProgress