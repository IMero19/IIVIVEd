import React from 'react';

const Home = () => {
    return(
        <section className="home-hero">
            <div>
                <img className="hero-img" src="./image.png" />
                <div className="hero-details">
                    <h1 className="hero-title"><strong>Support your education.</strong></h1>
                    <p>Wherever you go, go with all your heart.</p>
                    <a href="#" className="btn hero-btn">Learn more</a>
                </div>
            </div>
        </section>
    )
}

export default Home;