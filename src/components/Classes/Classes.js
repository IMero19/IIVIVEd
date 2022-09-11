import React from 'react';
import Class from '../Class/Class';

const Classes = ({ toCoursesSearch }) => {
    const classesList = [
        {
            id: 1,
            title: "Arabic Classes",
            image: 'https://xxvived.files.wordpress.com/2020/08/14373.jpg?w=750',
            desc: 'Arabic IS Powerful'
        },
        {
            id: 2,
            title: "English Classes",
            image: 'https://xxvived.files.wordpress.com/2020/08/61062.jpg?w=750',
            desc: 'English IS The Main'
        },
        {
            id: 3,
            title: "French Classes",
            image: 'https://xxvived.files.wordpress.com/2020/08/10640.jpg?w=750',
            desc: 'French IS ...'
        },
        {
            id: 4,
            title: "Physics Classes",
            image: 'https://xxvived.files.wordpress.com/2020/08/91185.jpg?w=750',
            desc: 'Physics is Genius'
        },
        {
            id: 5,
            title: "Arabic Classes",
            image: 'https://xxvived.files.wordpress.com/2020/08/14373.jpg?w=750',
            desc: 'Arabic IS Powerful'
        },
        {
            id: 6,
            title: "Chemistry Classes",
            image: 'https://xxvived.files.wordpress.com/2020/08/4799.jpg?w=750',
            desc: 'Chemistry is explosion'
        },
        {
            id: 7,
            title: "Biology Classes",
            image: 'https://xxvived.files.wordpress.com/2020/08/23220.jpg?w=750',
            desc: 'Biology is your body'
        },
        {
            id: 8,
            title: "Mathematics Classes",
            image: 'https://xxvived.files.wordpress.com/2020/08/8084.jpg?w=750',
            desc: 'Deutch is also ...'
        }
    ];

    let classList = [];

    for (let i of classesList) {
        classList.push(<Class toCoursesSearch={toCoursesSearch} key={i.id} title={i.title} image={i.image} desc={i.desc} />)
    }
    return (
        <div className="classes">
            <div className="classes-container">
                {classList}
            </div>
        </div>
    )
}

export default Classes;