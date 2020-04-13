import React, { Component } from 'react';
import '../index.css';
import RegisterDwelling from './RegisterDwelling';
import { withCookies } from 'react-cookie';
import { MDBContainer, MDBCollapse } from 'mdbreact';
import { Button } from 'react-bootstrap';

class UserForm extends Component {
    state = {
        credentials: {

            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            firstname: '',
            lastname: '',
            tel: '',
            collapseID: ''

        }
    }
    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    };
    inputChanged = event => {
        let cred = this.state.credentials;
        cred[event.target.name] = event.target.value;


        if (!this.state.username) {
            this.setState.username = "Required";
        } else if (this.state.username === "admin") {
            this.setState.username = "Nice try!";
        }

        if ((this.state.email) !== /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) {
            this.setState.email = "Invalid email address";
        }

        if (!this.state.password) {
            this.setState.password = "Required";
        } else if (this.state.password !== /^(?=.{8,})/i) {
            this.setState.password = "Invalid password";
        }

        if (!this.state.confirmPassword) {
            this.setState.confirmPassword = "Required";
        } else if (this.state.confirmPassword !== /^(?=.{8,})/i) {
            this.setState.confirmPassword = "Invalid password";
        }

        if (this.state.confirmPassword !== this.state.password) {
            this.setState.confirmPassword = "Passwords do not match";
        }

        if (!this.state.password) {
            this.setState.password = "Required";
        } else if (this.state.password !== /^(?=.{8,})/i) {
            this.setState.password = "Invalid password";
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

    register = event => {
        console.log(this.state.credentials);
        alert("Account Registered");
        fetch('oko-api.herokuapp.com/account/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        })
            .catch(error => console.log(error))
    }

    render() {
        const { collapseID } = this.state;

        return (
            <React.Fragment>
                <img src={require('../images/background4.jpeg')} style={{ width: '100%', position: 'absolute' }}></img>
                <div class="centered" style={{ marginTop: '0px', width: '100%' }}>

                    <div className="login-container" style={{margin:'0', margin:'0px 200px 0px'}}>
                        <h1 className="login">Register User Account</h1>
                        <br></br>
                        <table style={{ width: '70vw' }}>
                            <tr style={{ width: '100%' }}>
                                <td style={{ width: '50%', paddingRight: '10px' }}>
                                    <span className="login-fill"><span style={{ color: "red" }}>*</span> First Name(s)</span><br />
                                    <input type="text" name="firstname" value={this.state.credentials.firstname} onChange={this.inputChanged} /><br />
                                </td>
                                <td style={{ width: '50%' }}>
                                    <span className="login-fill"><span style={{ color: "red" }}>*</span> Last Name</span><br />
                                    <input type="text" name="lastname" value={this.state.credentials.lastname} onChange={this.inputChanged} /><br />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '50%', paddingRight: '10px' }}>
                                    <span className="login-fill"><span style={{ color: "red" }}>*</span> Username</span><br />
                                    <input type="text" name="username" value={this.state.credentials.username} onChange={this.inputChanged} /><br />
                                </td>
                                <td>
                                    <span className="login-fill"><span style={{ color: "red" }}>*</span> Email</span><br />
                                    <input type="email" name="email" value={this.state.credentials.email} onChange={this.inputChanged} /><br />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '50%', paddingRight: '10px' }}>
                                    <span className="login-fill"><span style={{ color: "red" }}>*</span> Password <span style={{ fontSize: "0.70em" }}>(Must be eight characters or longer)</span></span><br />
                                    <input type="password" name="Password" value={this.state.credentials.Password} onChange={this.inputChanged} />
                                </td>
                                <td>
                                    <span className="login-fill"><span style={{ color: "red" }}>*</span> Confirm Password</span><br />
                                    <input type="password" name="password2" value={this.state.credentials.password2} onChange={this.inputChanged} />
                                </td>
                            </tr>
                        </table>
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
                        <a href="/"><button onClick={this.register} className="login_button" style={{style:'100%'}}>Register Account</button></a>
                        <a href="/Oko/EnterCode" style={{ color: '#38687E' }}>Enter Dwelling Code</a><br></br>
                        <a href="/Oko/RegisterDwelling" style={{ color: '#38687E' }}>Back to Register Dwelling</a><br></br>
                        <a href="/" style={{ color: '#38687E' }}>Back to Login</a>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
export default withCookies(UserForm);