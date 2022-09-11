import React from 'react';

const Info = () => {
    return (
        <section className="info">
            <div className="container">
                <div className="info-title">
                    <p>We are a local organization that provides support and expertise within the education, to potential studies, existing students, and organizations that involve teachers.</p>
                </div>
                <div className="more-info">
                    <p className="info-bold">Get in touch:</p>
                    <p>No location yet</p>
                    <div className="email">
                        <a href="iivivinc@outlook.com">iivivinc@outlook.com</a>
                    </div>
                    <p className="info-bold">Follow us:</p>
                    <div className="icons">
                        <a href="https://www.facebook.com/xxvivinc/"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.facebook.com/groups/222771575774787"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/xxvivinc/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://twitter.com"><i className="fa-brands fa-twitter"></i></a>
                        <a href="http://youtube.com"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info;