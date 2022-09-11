import React from 'react';

const ProfileCourse = ({ setCurrentCourseId, onRouteChange, course_info }) => {
    console.log('course_id:', course_info.course_id);
    return (
        <div onClick={() => {
            setCurrentCourseId(course_info.course_id);
            onRouteChange(`courses/${course_info.course_id}`)
            }} className='profile-course'>
            <div className='course-img'>
                <img src={course_info.course_img_url} />
            </div>
            <div className='profile-course-details'>
                <p>{course_info.course_name}</p>
                <p>{course_info.std_count} <span>Stds</span></p>
            </div>
        </div>
    )
}

export default ProfileCourse;