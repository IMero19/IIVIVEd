import React from 'react';

const Feed = ({ onRouteChange, setRole }) => {
    return (
        <section className="go_courses">
            {/* <div>
                <hr/>
                <p>COMING SOON</p>
                <hr/>
            </div> */}
            <div>
                <p>Start Learning Now!</p>
                <a onClick={() => {
                    onRouteChange('profile', true)
                    }} className='btn'>Learn more</a>
            </div>
        </section>
    )
}

export default Feed;