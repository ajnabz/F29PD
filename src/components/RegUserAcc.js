import React, { Component } from 'react';
import '../index.css';
import RegisterDwelling from './RegisterDwelling';
import { withCookies } from 'react-cookie';
import { MDBContainer, MDBCollapse } from 'mdbreact';
import { Button, Dropdown, Form } from 'react-bootstrap';

class UserForm extends Component {
    state = {
        credentials: {
            username: '',
            password: '',
            password2: '',
            email: '',
            first_name: '',
            surname: '',
            phone_number: '',
            dwelling_code: '',
            incentivisation_choice: '',
            goal: 0,
            admin_type: 'SA',
            logged_in: true,
            collapseID: ''
        },
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
        console.log(cred);
        if (this.state.username === "") {
            alert("username required");
            this.setState.username = "";
        } else if (this.state.username === "admin") {
            this.setState.username = "";
        }

        if ((this.state.email) !== /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) {
            this.setState.email = "";
        }

        if (!this.state.password) {
            this.setState.password = "";
        } else if (this.state.password !== /^(?=.{8,})/i) {
            this.setState.password = "";
        }

        if (!this.state.password2) {
            this.setState.password2 = "";
        } else if (this.state.password2 !== /^(?=.{8,})/i) {
            this.setState.password2 = "";
        }

        if (this.state.password2 !== this.state.password) {
            this.setState.password2 = "";
        }

        if (!this.state.password) {
            this.setState.password = "";
        } else if (this.state.password !== /^(?=.{8,})/i) {
            this.setState.password = "";
        }

        if (!this.state.first_name) {
            this.setState.first_name = "";
        } else if (this.state.first_name > /^(?=.{20,})/i) {
            this.setState.first_name = "";
        }

        if (!this.state.surname) {
            this.setState.surname = "";
        } else if (this.state.surname > /^(?=.{20,})/i) {
            this.setState.surname = "";
        }

        if (!this.state.phone_number) {
            this.setState.phone_number = "";
        } else if (this.state.phone_number !== /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?(\d{4}|\d{3}))?$/i) {
            this.setState.phone_number = "";
        } else if (this.state.phone_number !== /^(((\0\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\0\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\0\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?(\d{4}|\d{3}))?$/i) {
            this.setState.phone_number = "";
        }
    }

    register = event => {
        fetch('http://oko-api.herokuapp.com/account/users/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        }).then(res => {
            if (res.ok) {
                window.location.href = '/'
            } else {
                alert("Invalid information, please reenter your details correctly")
                window.location.href = '/Oko/RegisterUser'
            }
        }).catch(error => console.log(error))
    }

    render() {
        const { collapseID } = this.state;

        return (
            <div>
                <img src={require('../images/background4.jpeg')} style={{ width: '100%', position: 'absolute' }} className="login_img1"></img>
                <img src={require('../images/background4.jpeg')} className="login_img2"></img>
                <div class="centered" style={{ marginTop: '0px', width: '100%' }}>

                    <div className="login-container" style={{ margin: '0', margin: '0px 200px 0px' }}>
                        <h1 className="login">Register User Account</h1>
                        <br></br>
                        <table style={{ width: '70vw' }}>
                            <tr style={{ width: '100%' }}>
                                <td style={{ width: '50%', paddingRight: '10px' }}>
                                    <span className="login-fill"><span style={{ color: "red" }}>*</span> First Name(s)</span><br />
                                    <input type="text" name="first_name" value={this.state.credentials.first_name} onChange={this.inputChanged} /><br />
                                </td>
                                <td style={{ width: '50%' }}>
                                    <span className="login-fill"><span style={{ color: "red" }}>*</span> Last Name</span><br />
                                    <input type="text" name="surname" value={this.state.credentials.surname} onChange={this.inputChanged} /><br />
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
                                    <input type="password" name="password" value={this.state.credentials.password} onChange={this.inputChanged} />
                                </td>
                                <td>
                                    <span className="login-fill"><span style={{ color: "red" }}>*</span> Confirm Password</span><br />
                                    <input type="password" name="password2" value={this.state.credentials.password2} onChange={this.inputChanged} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '50%', paddingRight: '10px' }}>
                                    <span className="login-fill"><span style={{ color: "red" }}>*</span> Phone Number </span><br />
                                    <input type="tel" name="phone_number" value={this.state.credentials.phone_number} onChange={this.inputChanged} />
                                </td>
                                <td>
                                    <span className="login-fill"><span style={{ color: "red" }}>*</span> Dwelling Code</span><br />
                                    <input type="text" name="dwelling_code" value={this.state.credentials.dwelling_code} onChange={this.inputChanged} />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '50%', paddingRight: '10px' }}>
                                    <span className="login-fill"><span style={{ color: "red" }}>*</span> Incentivisation Choice </span><br />
                                    <p>Type HE if you want to Help the Environment or SM if you want to Save Money</p>
                                    <input type="text" name="incentivisation_choice" value={this.state.credentials.incentivisation_choice} onChange={this.inputChanged} />
                                </td>
                                <td>
                                    <span className="login-fill"><span style={{ color: "red" }}>*</span>Set a Goal</span><br />
                                    <p>Set a goal for how much energy or money you want to save per month</p>
                                    <input type="text" name="goal" value={this.state.credentials.goal} onChange={this.inputChanged} />
                                </td>
                            </tr>
                        </table>

                        <div>
                            <p>By clicking Register, you agree to our <a style={{ color: "blue" }} href="/Oko/TermsAndConditions">Terms and Conditions</a>.</p>
                        </div>
                        <a ><button onClick={this.register} className="login_button" style={{ style: '100%' }}>Register Account</button></a>
                        <a href="/Oko/EnterCode" style={{ color: '#38687E' }}>Enter Dwelling Code</a><br></br>
                        <a href="/Oko/RegisterDwelling" style={{ color: '#38687E' }}>Back to Register Dwelling</a><br></br>
                        <a href="/" style={{ color: '#38687E' }}>Back to Login</a>
                    </div>
                </div>

            </div>
        );
    }
}
export default withCookies(UserForm);