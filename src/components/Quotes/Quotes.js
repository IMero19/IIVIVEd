import React from 'react';

const Quotes = () => {
    return (
        <section className="quotes">
            <svg id="info-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,144C384,171,480,245,576,240C672,235,768,149,864,96C960,43,1056,21,1152,48C1248,75,1344,149,1392,186.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className="quotes-container">
                <div className="quote">
                    <p>“So many things are possible just as long as you don’t know they’re impossible.”</p>
                </div>
                <div className="author">
                    <p>Norton Juster</p>
                </div>
                <hr/>
                <div className="buttons">
                    <a href="#" className="btn">About us</a>
                    <a href="#" className="btn">Contact us</a>
                    <a href="#" className="btn">Feedback</a>
                </div>
            </div>
        </section>
    )
}

export default Quotes;