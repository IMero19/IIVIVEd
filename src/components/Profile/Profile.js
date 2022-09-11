import React from 'react';
import ProfileCourse from '../ProfileCourse/ProfileCourse';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            courses_ids: []
        }
    }

    getCourses = async () => {

        fetch(`http://localhost:3000/profile_courses/${Number(this.props.currentUser.id)}`)
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
        fetch(`http://localhost:3000/profile/${this.state.courses_ids.toString()}`)
        .then(res => res.json())
        .then(data => {
            this.setState({ courses: data });
        })
        .catch(err => console.log);
        
        // fetch(`http://localhost:3000/profile_courses/${Number(this.props.currentUser.id)}`)
        // .then(res => res.json())
        // .then(data => {
        //     if (data.length > 0) {
        //         this.setState({ courses_ids: data });
        //     }
        //     else {
        //         console.log('error');
        //     }
        // })
        // .catch(err => console.log);

        // await new Promise(resolve => setTimeout(resolve, 500));
        // fetch(`http://localhost:3000/profile/${this.state.courses_ids.toString()}`)
        // .then(res => res.json())
        // .then(data => {
        //     this.setState({ courses: data });
        // })
        // .catch(err => {
        //     console.log('error')
        // })
    }
    // try {
    //     const res1 = await fetch(`http://localhost:3000/profile_courses/${Number(this.props.currentUser.id)}`);
    //     const resJson1 = await res1.json();
    //     if (resJson1.length > 0) {
    //         this.setState({ courses_ids: resJson1 });
    //     }
    // } catch (err) {
    //     console.log(err);
    // }

    // try {
    //     const res2 = await fetch(`http://localhost:3000/profile/${this.state.courses_ids.toString()}`);
    //     const resJson2 = await res2.json();
    //     this.setState({ courses: resJson2 });
    // } catch (err) {
    //     console.log(err);
    // }
    
    

    componentDidMount() {
        this.getCourses();
        // fetch(`http://localhost:3000/profile_courses/${Number(this.props.currentUser.id)}`)
        // .then(res => res.json())
        // .then(data => {
            
        //     if (data.length > 0) {
        //         this.setState({ courses_ids: data });
        //         console.log('courses_ids 1: ', this.state.courses_ids);
        //     }
        //     else {
        //         console.log('error');
        //     }
        // })
        // .catch(err => console.log);

        // console.log('courses_ids: 2', this.state.courses_ids);
        // fetch(`http://localhost:3000/profile/${this.state.courses_ids}`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log('courses_data', data);
        //     this.setState({ courses: data });
        // })
    }

    // Fetch profiles table to get the course_ids for the user
    // Using the course_ids fetch the courses table to get the name, img_url and std_count


    render() {
        const profileCourses = [];
        if (this.state.courses_ids.length > 0) {
            for (let item of this.state.courses) {
                profileCourses.push(<ProfileCourse setCurrentCourseId={this.props.setCurrentCourseId} onRouteChange={this.props.onRouteChange} key={item.course_id} course_info={item} />);
            }
        }

        return(
            <section className='profile-container'>
                <div className='profile'>
                    <h1>Courses</h1>
                    {
                        profileCourses.length > 0 ? <div className='profile-courses-list'>
                            {profileCourses}                        
                        </div>
                        : <p className='courses_err'>Seems like you're not subscribed to any courses yet!</p>
                    }
                </div>
            </section>
        )
    }
}

export default Profile;