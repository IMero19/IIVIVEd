import React from 'react';
import TNav from '../TNav/TNav';
import TBox from '../TBox/TBox';
import ProfileCourse  from '../ProfileCourse/ProfileCourse';

class TDash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            std_count: 0,
            courses_count: 0,
            courses_ids: [],
            courses: []
        }
    }

    getCourses = async () => {
        fetch(`http://localhost:3000/teacher/dashboard_courses/${this.props.user.email}`)
        .then(res => res.json())
        .then(data => { 
            if (data.length > 0) {
                this.setState({ courses_ids: data });
            }
            else if (data.length === 0) {
                return 0;
            }
            else {
                console.log('error');
            }
        })
        .catch(err => console.log);

        await new Promise(resolve => setTimeout(resolve, 500));
        fetch(`http://localhost:3000/dashboard/${this.state.courses_ids.toString()}`)
        .then(res => res.json())
        .then(data => {
            this.setState({ courses: data });
        })
        .catch(err => console.log);
    }

    componentDidMount() {
        fetch(`http://localhost:3000/getDash/${this.props.user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({ std_count: data.std_count });
            this.setState({ courses_count: data.courses_count });
        })

        this.getCourses();
    }

    render() {
        const profileCourses = [];
        for (let item of this.state.courses) {
            profileCourses.push(<ProfileCourse setCurrentCourseId={this.props.setCurrentCourseId} onRouteChange={this.props.onRouteChange} key={item.course_id} course_info={item} />);
        }

        return (
            <div>
                <TNav onRouteChange={this.props.onRouteChange} />
                <section className='dash'>
                    <h1>Counters</h1>
                    <div className='tboxes'>
                        <TBox title={"Students"} count={this.state.std_count} />
                        <TBox title={"Courses"} count={this.state.courses_count} />
                    </div>
                </section>
                <section className='profile-container'>
                    <div className='profile'>
                        <h1>Courses</h1>
                        {
                            profileCourses.length > 0 
                            ? <div className='profile-courses-list'>
                                {profileCourses}                        
                            </div>
                            : <p className='courses_err'>Seems like you don't have any courses yet<br />Contact us to upload!</p>
                        }
                        
                    </div>
                </section>
            </div>
        )
    }
}

export default TDash;