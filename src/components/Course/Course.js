import React from 'react';
import CourseLesson from '../CourseLesson/CourseLesson';

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/lessons/${this.props.course_id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({ lessons: data });
        })
        .catch(err => {
            console.log('error')
        })
    }

    addFinished = (id) => {
        fetch(`http://localhost:3000/finish_lesson/${id}`)
        .then(res => res.json())
        .catch(err => console.log);
    }

    render() {
        const lessons = [];
        for (let lesson of this.state.lessons) {
            console.log('lesson', lesson);
            lessons.push(<CourseLesson preview={false} addFinished={this.addFinished} key={lesson.lesson_id} lessonInfo={lesson} />);
        }

        return (
            <section className='courseLesson_container'>
                {lessons}
            </section>
        )
    }
}

export default Course;