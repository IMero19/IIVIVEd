import React from 'react';

const Boxes = ({ onRouteChange, setRole }) => {
    return (
        <section className="boxes">
        <div className="boxes-container">
                <div className="box light">
                    <div className="title">
                        <h1>Want to study?</h1>
                    </div>
                    <div className="details">
                        <p>We’ve had an incredible response so far, and are doing everything we can to respond to everyone who wants to study in one of our community programs.</p>
                    </div>
                    <div className="button">
                        <a onClick={() => {
                            onRouteChange('register');
                            setRole('student');
                        }} className="btn">Get involved</a>
                    </div>
                </div>
                <div className="box dark">
                    <div className="title">
                        <h1>Are you a teacher?</h1>
                    </div>
                    <div className="details">
                        <p>We are uniting our resources around this challenge, and we are combining our resources and asks to make it easy for people to support their communities.</p>
                    </div>
                    <div className="button">
                        <a onClick={() => {
                            onRouteChange('register');
                            setRole('teacher');
                        }} className="btn">Get involved</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Boxes;