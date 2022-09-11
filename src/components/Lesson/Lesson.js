import React from 'react';

class Lesson extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='lesson-container'>
                <div className='lesson'>
                    <div className='iframe-container'>
                        <iframe width="420" height="315" src="https://youtube.com/embed/sPo-eUPyGM4" title="Lesson" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                    </div>
                </div>
            </section>
        )
    }
}

export default Lesson;