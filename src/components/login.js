import React, { Component } from 'react';
import '../index.css';
import { withCookies } from 'react-cookie';
import okologo from '../images/okologotext.png';

class Login extends Component {

    state = {
        credentials: {
            username: '',
            Password: '',
            password2: '',
            email: '',
            firstname: '',
            lastname: '',
            tel: '',
            address: '',
            homeUsername: '',
            ownerUsername: '',
            collapseID: '',
            SM: '',
            HE: ''
        },
        isLoginView: true
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    };


    inputChanged = event => {
        let cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });

        if (!this.state.username) {
            this.setState.username = "Required";
        } else if (this.state.username === "admin") {
            this.setState.username = "Nice try!";
        }

        if ((this.state.email) !== /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) {
            this.setState.email = "Invalid email address";
        }

        if (!this.state.Password) {
            this.setState.Password = "Required";
        } else if (this.state.Password !== /^(?=.{8,})/i) {
            this.setState.Password = "Invalid password";
        }

        if (!this.state.password2) {
            this.setState.password2 = "Required";
        } else if (this.state.password2 !== /^(?=.{8,})/i) {
            this.setState.password2 = "Invalid password";
        }

        if (this.state.password2 !== this.state.Password) {
            this.setState.password2 = "Passwords do not match";
        }

        if (!this.state.firstname) {
            this.setState.firstname = "Required";
        } else if (this.state.firstname > /^(?=.{20,})/i) {
            this.setState.firstname = "Name is too long";
        }

        if (!this.state.lastname) {
            this.setState.lastname = "Required";
        } else if (this.state.lastname > /^(?=.{20,})/i) {
            this.setState.lastname = "Name is too long";
        }

        if (!this.state.tel) {
            this.setState.tel = "Required";
        } else if (this.state.tel !== /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?(\d{4}|\d{3}))?$/i) {
            this.setState.tel = "Invalid phone number";
        } else if (this.state.tel !== /^(((\0\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\0\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\0\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?(\d{4}|\d{3}))?$/i) {
            this.setState.tel = "Invalid phone number";
        }
    }


    login = event => {
        if (this.state.isLoginView) {
            console.log(this.state.credentials);
            fetch('oko-api.herokuapp.com/account/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state.credentials)
            }).then(res => {
                console.log(res.token);
                this.props.cookies.set('token', res.token);
                window.location.href = "/Oko/"
            })
                .catch(error => console.log(error))
        } else {
            alert("Account registered");
            console.log(this.state.credentials);
            fetch('oko-api.herokuapp.com/account/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state.credentials)
            }).then(res => {
                this.setState({ isLoginView: true });
                window.location.href = '/Oko/Settings'
            })
                .catch(error => console.log(error))
        }

    }

    toggleView = () => {
        this.setState({ isLoginView: !this.state.isLoginView });
    }


    render() {
        const { collapseID } = this.state;

        return (
            <React.Fragment>
                <img src={require('../images/background4.jpeg')} style={{ width: '100%', position: 'absolute' }}></img>

                <div class="centered">


                    <a href="https://flonne.me/" className="f_button" target='_tab'><img className="logo" src={okologo} alt="logo"></img></a>
                    <div className="login-container" style={{ paddingBottom: '0px', marginBottom: '0', marginLeft: '0' }}>

                        <h1 className="login">
                            {this.state.isLoginView ? 'Login' : 'Register'}
                        </h1>
                    </div>
                    <br />

                    <div>
                        {this.state.isLoginView ?

                            <React.Fragment>
                                <span className="login-fill">Username</span><br />
                                <input className="" type="text" name="username" value={this.state.credentials.username}
                                    onChange={this.inputChanged} /><br />
                                <span className="login-fill">Password</span><br />
                                <input type="password" name="Password" value={this.state.credentials.Password}
                                    onChange={this.inputChanged} />
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <div>
                                    <br></br>
                                    <br></br>
                                    <h3>Do you have a dwelling Account?</h3>
                                    <br></br>
                                    <table style={{ width: '100%' }}>
                                        <tr>
                                            <td style={{ width: '50%' }}>
                                                <a href="/Oko/EnterCode"><button className="dwellCode_button">Yes</button></a>
                                            </td>
                                            <td style={{ width: '50%' }}>
                                                <a href='/Oko/RegisterDwelling'><button className="dwellCode_button">No</button></a>
                                            </td>
                                        </tr>
                                    </table>
                                    <br></br>
                                </div>
                            </React.Fragment>
                        }
                    </div>


                    <button onClick={this.login} className="login_button">
                        {this.state.isLoginView ? 'Login' : 'Register'}
                    </button>
                    <p onClick={this.toggleView}>
                        {this.state.isLoginView ?
                            <React.Fragment>
                                <br></br>
                                <button className='dwellCode_button' style={{marginBottom:'0px'}}>Create Account</button>
                                <br></br><br></br>
                                <a href="/Oko/ForgottenPassword" style={{ color: '#38687E' }}>Forgot Password?</a>
                            </React.Fragment>
                            : <a>Back to Login</a>}
                    </p>
                </div >

            </React.Fragment>

        );
    }
}

export default withCookies(Login);
