import React from 'react';

const Class = ({title, image, desc, toCoursesSearch}) => {
    return (
        <div onClick={() => toCoursesSearch(title.replace(' Classes', ''))} className="class">
            <p className="class-title">{title}</p>
            <img className="class-img" src={image} />
            <p className="class-desc">{desc}</p>
            <hr/>
        </div>
    )
}

export default Class;