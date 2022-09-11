import React from 'react';
import CourseLesson from '../CourseLesson/CourseLesson';

class CoursePreview extends React.Component {
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

    render() {
        const lessons = [];
        for (let lesson of this.state.lessons) {
            console.log('lesson', lesson);
            lessons.push(<CourseLesson preview={true} addFinished={this.addFinished} key={lesson.lesson_id} lessonInfo={lesson} />);
        }

        return (
            <section className='coursePreview_container'>
                <div className='coursePreview'>
                    <div className='preview_cover'></div>
                    <p className='preview_title'>Course Name</p>
                    <div className='courseLesson_container'>
                        {lessons}
                    </div>
                </div>
            </section>
        )
    }
}


export default CoursePreview;