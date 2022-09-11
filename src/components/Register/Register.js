import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            date: '',
            errorText: '',
            role: 'student',
            isTeacher: false
        }
    }

    onEmailChange = (evt) => {
        this.setState({ email: evt.target.value });
    }

    onNameChange = (evt) => {
        this.setState({ name: evt.target.value });
    }

    onPasswordChange = (evt) => {
        this.setState({ password: evt.target.value });
    }

    onDateChange = (evt) => {
        this.setState({ date: evt.target.value });
    }

    onInputChange = (evt) => {
        if (this.state.isTeacher) {
            this.setState({ isTeacher: false });
            this.setState({ role: 'student' });
        } else {
            this.setState({ isTeacher: true });
            this.setState({ role: 'teacher' });
        }

        document.querySelector('.checkbox').classList.toggle('fill_checkbox');
    }

    onSubmit = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                date: this.state.date,
                role: this.state.role
            })
        })
        .then(res => res.json())
        .then(user => {
            if (user.id) {
                if (user.role === 'teacher') {
                    this.props.loadUser(user);
                    this.props.onRouteChange('t_dashboard');
                }
                else {
                    this.props.loadUser(user);
                    this.props.onRouteChange('profile');
                }
            }
            else {
                this.setState({ errorText: user });
            }
        }).catch(err => {
            this.setState({ errorText: 'Something went wrong!' });
        })
    }

    render() {
        return (
            <div className='form-container'>
                <div className='form'>
                    <p className='form-title'>Register</p>
                    <input onChange={this.onNameChange} className='input' type='text' placeholder='Name' />
                    <input onChange={this.onEmailChange} className='input' type='email' placeholder='Email Address' />
                    <input onChange={this.onPasswordChange} className='input' type='password' placeholder='Password' />
                    <div className='teacher_verf'>
                        <span>Register as Teacher</span>
                        <div onClick={this.onInputChange} className='checkbox_container'>
                            <div className='checkbox'></div>
                        </div>
                    </div>
                    {
                        !this.state.isTeacher
                        ? <div className='date_verf'><input onChange={this.onDateChange} className='input' type='date' max='2009-01-01' required /><span></span></div> 
                        : <div></div>
                    }
                    <a onClick={this.onSubmit} className='btn'>Register</a>
                    <p onClick={() => this.props.onRouteChange('signin')} className='reg-signin'>Have an account? <span>Sign In</span></p>
                    <p className='wrong_info'>{this.state.errorText}</p>
                </div>
            </div>
        )
    }
}

export default Register;