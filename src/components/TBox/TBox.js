import React from 'react';

const TBox = ({ title, count }) => {
    return (
        <div className='tbox-container'>
            <h2 className='tbox-title'>{title}</h2>
            <div className='tbuffer'></div>
            <h2 className='tbox-count'>{count}</h2>
        </div>
    )
}

export default TBox;