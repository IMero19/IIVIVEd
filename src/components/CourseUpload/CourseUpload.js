import React from 'react';
import TNav from '../TNav/TNav';

class CourseUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course_name: '',
            price: '',
            grade: '',
            desc: '',
            image: '',
            errorText: '',
            success: false
        }
    }

    onNameChange = (evt) => {
        this.setState({ course_name: evt.target.value });
    }

    onPriceChange = (evt) => {
        this.setState({ price: evt.target.value });
    }

    onGradeChange = (evt) => {
        this.setState({ grade: evt.target.value });
    }

    onDescChange = (evt) => {
        this.setState({ desc: evt.target.value });
    }

    onImageChange = (evt) => {
        console.log('image:', evt.target.files)
        this.setState({ image: evt.target.files });
    }

    onSubmit = () => {
        for (let i in this.state) {
            if (i === '') {
                this.setState({ errorText: 'Please fill in the form' })
                break;
            }
        }

        fetch(`http://localhost:3000/upload_course`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.props.user.email,
                course_name: this.state.course_name,
                price: this.state.price,
                grade: this.state.grade,
                course_desc: this.state.desc,
                image: this.state.image
            })
        })
        .then(res => res.json())
        .then(response => {
            if (response === 'success') {
                this.setState({ success: true })
                new Promise(resolve => setTimeout(resolve, 1000));
                this.props.onRouteChange('t_dashboard');
            }
        })
    }

    render() {
        return (
            <div>
                {
                    !this.state.success ?
                    <div>
                        <TNav onRouteChange={this.props.onRouteChange} />
                        <div className='form-container upload_site'>
                            <div className='form'>
                                <h1 className='form-title'>Upload Course</h1>
                                <input onChange={this.onNameChange} className='input' type='text' placeholder='Course Name' />
                                <input onChange={this.onPriceChange} className='input' type='number' min={0} step='any' placeholder='Price' />
                                <select onChange={this.onGradeChange} className='input' name='Grade'>
                                    <option selected disabled>Grade</option>
                                    <option disabled>Preperatory</option>
                                    <option name='1st_prep' value='1st_prep'>1st Prep</option>
                                    <option name='2nd_prep' value='2nd_prep'>2nd Prep</option>
                                    <option name='3rd_prep' value='3rd_prep'>3rd Prep</option>
                                    <option disabled>Secondary</option>
                                    <option name='1st_sec' value='1st_sec'>1st Sec</option>
                                    <option name='2nd_sec' value='2nd_sec'>2nd Sec</option>
                                    <option name='3rd_sec' value='3rd_sec'>3rd Sec</option>
                                </select>
                                <textarea onChange={this.onDescChange} className='input textarea' placeholder='Course Description'></textarea>
                                <input onChange={this.onImageChange} className='input' type='file' />
                                <a onClick={this.onSubmit} className='btn upload'>Upload</a>
                                <p className='wrong_info'>{this.state.errorText}</p>
                            </div>
                        </div>
                    </div>
                    : <div className='profile'>
                        <h1>Course Uploaded Successfully!</h1>
                    </div>
                }

            </div>
        )
    }
}

export default CourseUpload;
