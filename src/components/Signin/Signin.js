import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            errorText: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
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
                    <p className='form-title'>Sign In</p>
                    <input onChange={this.onEmailChange} className='input' type='email' placeholder='Email Address' />
                    <input onChange={this.onPasswordChange} className='input' type='password' placeholder='Password' />
                    <a onClick={this.onSubmitSignIn} className='btn'>Sign In</a>
                    <p onClick={() => this.props.onRouteChange('register')} className='reg-signin'>Don't Have an account? <span>Register</span></p>
                    <p className='wrong_info'>{this.state.errorText}</p>
                </div>
            </div>
        )
    }
}

export default Signin;