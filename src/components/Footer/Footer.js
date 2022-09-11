import React from 'react';

const Footer = ({ onRouteChange }) => {
    return (
        <section className="footer">
            <div className="footer-container">
                <div className="footer-item">
                    <h1>About Us</h1>
                    <p>We are a local organization that provides support and expertise within the education, to potential studies, existing students, and organizations that involve teachers.</p>
                    <a onClick={() => onRouteChange('classes')}>More About Us</a>
                </div>
                <div className="footer-item">
                    <h1>Get In Touch</h1>
                    <a onClick={() => onRouteChange('classes')}><span><i className="fa-solid fa-envelope"></i></span>xxvivinc@outlook.com</a>
                    <a onClick={() => onRouteChange('classes')}>More Ways to Get In Touch</a>
                </div>
                <div className="footer-item">
                    <h1>Drop By</h1>
                    <p>No location yet</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;