import React from 'react';

const TNav = ({ onRouteChange }) => {
    return (
        <div className='navbar'>
            <a onClick={() => onRouteChange('t_dashboard')} className="logo">I I V I V Ed <span className='sep'>|</span><span className='logo-dash'>Dashboard</span></a>
            <div className='nav'>
                <a onClick={() => onRouteChange('home')}>Home</a>
                <a onClick={() => onRouteChange('c_upload')} className='btn upload_btn'>Upload Course</a>
            </div>
        </div>
    )
}

export default TNav;