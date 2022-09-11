import React from 'react';

const Menu = ({ onRouteChange }) => {
    return(
        <div className="menu none">
            <ul className="list">
                <li className="item">
                    <a onClick={() => onRouteChange('home')}>Home</a>
                </li>
                <li className="item">
                    <a onClick={() => onRouteChange('blog')}>Blog</a>
                </li>
                <li className="item">
                    <a onClick={() => onRouteChange('classes')}>Classes</a>
                </li>
                <li className="item">
                    <a onClick={() => onRouteChange('team')}>Team</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu; 