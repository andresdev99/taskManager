import React from 'react'
import './Bars.css'

const LeftBar = ({ children }) => {
    return (
        <div className='left-container'>
            <div className='top-image'>
            </div>
            <div className='form'>
                {children}
            </div>
            <div className='bottom-image'>
                
            </div>
        </div>
    )
}

const RightBar = ({ children }) => {
    return (
        <div className='right-container'>
            {children}
        </div>
    )
}

export { LeftBar, RightBar }