import React, { Component } from 'react';
import '../index.css';
import { withCookies } from 'react-cookie';
import { MDBContainer, MDBCollapse } from 'mdbreact';
import okologo from '../images/okologotext.png';
import { Parallax } from 'react-parallax';

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


                    <a href="https://flonne.me/" className="f_button" target='_tab'><img className="logo" src={okologo} alt="logo" style={{ margin: '20px' }}></img></a>
                    <div className="login-container" style={{ paddingBottom: '0px', marginBottom: '0' }}>

                        <h1 className="login">
                            {this.state.isLoginView ? 'Login' : 'Register'}
                        </h1>
                    </div>
                    <br />

                    <div>
                        {this.state.isLoginView ?

                            <React.Fragment>
                                <div className="login-container">
                                    <span className="login-fill">Username</span><br />
                                    <input className="" type="text" name="username" value={this.state.credentials.username}
                                        onChange={this.inputChanged} /><br />
                                    <span className="login-fill">Password</span><br />
                                    <input type="password" name="Password" value={this.state.credentials.Password}
                                        onChange={this.inputChanged} />
                                </div>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <br></br>
                                <table style={{width:'70vw'}}>
                                    <tr style={{width:'100%'}}> 
                                        <td style={{width:'50%', paddingRight: '10px'}}>
                                            <span className="login-fill"><span style={{ color: "red" }}>*</span> First Name(s)</span><br />
                                            <input type="text" name="firstname" value={this.state.credentials.firstname} onChange={this.inputChanged} /><br />
                                        </td>
                                        <td style={{width:'50%'}}>
                                            <span className="login-fill"><span style={{ color: "red" }}>*</span> Last Name</span><br />
                                            <input type="text" name="lastname" value={this.state.credentials.lastname} onChange={this.inputChanged} /><br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'50%', paddingRight: '10px'}}>
                                            <span className="login-fill"><span style={{ color: "red" }}>*</span> Username</span><br />
                                            <input type="text" name="username" value={this.state.credentials.username} onChange={this.inputChanged} /><br />
                                        </td>
                                        <td>
                                            <span className="login-fill"><span style={{ color: "red" }}>*</span> Email</span><br />
                                            <input type="email" name="email" value={this.state.credentials.email} onChange={this.inputChanged} /><br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'50%', paddingRight: '10px'}}>
                                            <span className="login-fill"><span style={{ color: "red" }}>*</span> Password <span style={{ fontSize: "0.70em" }}>(Must be eight characters or longer)</span></span><br />
                                            <input type="password" name="Password" value={this.state.credentials.Password} onChange={this.inputChanged} />
                                        </td>
                                        <td>
                                            <span className="login-fill"><span style={{ color: "red" }}>*</span> Confirm Password</span><br />
                                            <input type="password" name="password2" value={this.state.credentials.password2} onChange={this.inputChanged} />
                                        </td>
                                    </tr>
                                </table>
                                <span className="login-fill"><span style={{ color: "red" }}>*</span> Phone Number</span><br />
                                <input type="tel" name="tel" value={this.state.credentials.tel} onChange={this.inputChanged} />
                                <span className="login-fill"><span style={{ color: "red" }}>*</span>Incentivisation Choice</span><br></br>


                                <form>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value="SM" checked={this.state.selectedOption === 'SM'} onChange={this.handleOptionChange} />
                                            {"  "}Save Money
                                        </label>
                                    </div>
                                    <div className="radio">
                                        <label>
                                            <input type="radio" value="HE" checked={this.state.selectedOption === 'HE'} onChange={this.handleOptionChange} />
                                            {"  "}Help The Environment
                                        </label>
                                    </div>

                                </form>


                                <div>
                                    <p>By clicking Register, you agree to our <a style={{ color: "blue" }} href="/Oko/TermsAndConditions">Terms and Conditions</a>.</p>
                                    
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
                                <a>Create Account</a>
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
