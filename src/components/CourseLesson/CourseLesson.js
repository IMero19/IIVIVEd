import React from 'react';

const CourseLesson = ({ lessonInfo, addFinished, preview }) => {
    let fill = 'fill';
    if (lessonInfo.finished == true) {
        fill = 'fill-box'
    }
    return (
        <div className='courseLesson' onClick={() => {
            if (!preview) {
                addFinished(lessonInfo.lesson_id)
            }
            }}>
            <div>
                <div className='lesson_checkbox'>
                    <div className={fill}></div>
                </div>
                <p>{lessonInfo.lesson_name}</p>
            </div>
            <a>{'>'}</a>
        </div>
    )
}

export default CourseLesson;