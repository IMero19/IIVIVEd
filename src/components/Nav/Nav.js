import React from 'react';

const Nav = ({ onRouteChange, menuClick }) => {
    
    
    return (
        <header className="navbar">
            <a className="logo">I I V I V Ed</a>
            <a onClick={menuClick} className="none menu-btn btn">Menu <span>+</span></a>
            <div className="nav">
                <a onClick={() => onRouteChange('home')}>Home</a>
                <a onClick={() => onRouteChange('blog')}>Blog</a>
                <a onClick={() => onRouteChange('classes')}>Classes</a>
                <a onClick={() => onRouteChange('team')}>Team</a>
            </div>
        </header>
    )
}

export default Nav;