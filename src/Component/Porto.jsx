import React from 'react'
import './Style/porto.scss';

const Porto = ({ img }) => {
  return (
    <div className='porto'>
        <div className="topbar">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
        <img src={img} alt="" className='portos' />
    </div>
  )
}

export default Porto