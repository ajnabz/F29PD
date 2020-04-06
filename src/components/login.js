import React, { Component } from 'react';
import '../index.css';
import { withCookies } from 'react-cookie';
import { MDBContainer, MDBCollapse } from 'mdbreact';
import background from '../images/tree.jpg';
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
            collapseID: ''
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

        if (!this.state.address) {
            this.setState.address = "Required";
        } else if (this.state.address > /^(?=.{30,})/i) {
            this.setState.lastname = "Address is too long";
        }

        if (!this.state.homeUsername) {
            this.setState.homeUsername = "Required";
        } else if (this.state.homeUsername > /^(?=.{20,})/i) {
            this.setState.homeUsername = "Username is too long";
        }

        if (!this.state.ownerUsername) {
            this.setState.ownerUsername = "Required";
        } else if (this.state.ownerUsername > /^(?=.{20,})/i) {
            this.setState.ownerUsername = "Username is too long";
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
                <a href="https://flonne.me/" className="f_button" target='_tab'><img className="logo" src={okologo} alt="logo" style={{ margin: '20px' }}></img></a>
                <div className="login-container">
                    <h1 className="login">
                        {this.state.isLoginView ? 'Login' : 'Register'}
                    </h1>
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
                                <br></br>
                                <span className="login-fill"><span style={{ color: "red" }}>*</span> Email</span><br />
                                <input type="email" name="email" value={this.state.credentials.email} onChange={this.inputChanged} /><br />
                                <span className="login-fill"><span style={{ color: "red" }}>*</span> First Name(s)</span><br />
                                <input type="text" name="firstname" value={this.state.credentials.firstname} onChange={this.inputChanged} /><br />
                                <span className="login-fill"><span style={{ color: "red" }}>*</span> Last Name</span><br />
                                <input type="text" name="lastname" value={this.state.credentials.lastname} onChange={this.inputChanged} /><br />
                                <span className="login-fill"><span style={{ color: "red" }}>*</span> Username</span><br />
                                <input type="text" name="username" value={this.state.credentials.username} onChange={this.inputChanged} /><br />
                                <span className="login-fill"><span style={{ color: "red" }}>*</span> Password <span style={{ fontSize: "0.70em" }}>(Must be eight characters or longer)</span></span><br />
                                <input type="password" name="Password" value={this.state.credentials.Password} onChange={this.inputChanged} />
                                <span className="login-fill"><span style={{ color: "red" }}>*</span> Confirm Password</span><br />
                                <input type="password" name="password2" value={this.state.credentials.password2} onChange={this.inputChanged} />
                                <span className="login-fill"><span style={{ color: "red" }}>*</span> Phone Number</span><br />
                                <input type="tel" name="tel" value={this.state.credentials.tel} onChange={this.inputChanged} />

                                <div>
                                    <p>By clicking Register, you agree to our <a style={{ color: "blue" }} onClick={this.toggleCollapse('TandC')}>Terms and Conditions</a>.</p>
                                    <MDBContainer>
                                        <div>

                                        </div>
                                        <MDBCollapse id='TandC' isOpen={collapseID}>
                                            <span style={{ fontWeight: "bold" }}>TERMS AND CONDITIONS</span><br></br>

                                            <span style={{ fontWeight: "bold" }}>Please read all these terms and conditions.</span><br></br>
                                                As we can accept your order and make a legally enforceable agreement without further reference to you, you must read these terms and conditions to ensure that they do not contain anything you are not happy with.

                                                <br></br><span style={{ fontWeight: "bold" }}>Application</span><br></br>

                                                These Terms and Conditions will apply to the purchase by the goods and services by you, the customer, from OKO Development.
                                                These are the terms on which we will sell the services to you. You can only purchase the goods and services from this website if you are eligible to enter into a contract and at a minimum of 18 years old.

                                                <br></br><span style={{ fontWeight: "bold" }}>Services</span><br></br>

                                                The description of the services and goods is as set out in the website, brochures or other forms of advertisement. Any description is for illustrative purposes only and there may be small differences in the actual product.
                                                It is your responsibility to ensure that any information provided is accurate.
                                                We can make changes to the services which are necessary to comply with any applicable law or safety requirement. We will notify you of these changes.

                                                <br></br><span style={{ fontWeight: "bold" }}>Customer Responsibilities</span><br></br>

                                                You must cooperate with us in all matters relating to the services, provide us with all information required to perform the services and obtain any necessary licences and consents (unless otherwise agreed).
                                                Failure to comply with the above is a customer default which entitles us to suspend performance of the services until the customer remedies it.
                                                We can terminate the contract with immediate effect on written notice to the customer.

                                                <br></br><span style={{ fontWeight: "bold" }}>Personal Information</span><br></br>

                                                We retain and use all information strictly under the Privacy Policy.

                                                <br></br><span style={{ fontWeight: "bold" }}>Basis of Sale</span><br></br>

                                                The description of the service on our website does not constitute a contractual offer to sell the services. When an order has been submitted on the website, we can reject it for any reason, although we will try to tell you the reason without delay.
                                                The order process is set out on the website. Each step allows you to check and amend any errors before submitting the order. It is the customers responsibility to check that you have used the ordering process correctly.
                                                We intended that these Terms and Conditions apply only to a contract entered into by you as a consumer. If this is not the case, you must tell us, so that we can provide you with a different contact with terms which are more appropriate for you and which might, in some respects, be better for you.

                                                <br></br><span style={{ fontWeight: "bold" }}>Privacy</span><br></br>

                                                Your privacy is crucial to us. We respect your privacy and comply with the General Data Protection Act (2018) with regard to your personal information.
                                                The data we have stored will comply with our obligations imposed by Data Protection Laws:
                                                Before or at the time of collecting personal data, we will identify the purposes for which the information is being collected
                                                We will only process personal data for the purposes identified
                                                We will respect your rights in relation to your personal data
                                                We will implement technical and organisational measures to ensure your personal data is secure
                                                For any inquiries or complaints regarding data privacy, you can email: <span style={{ color: 'blue' }} href="mailto: okodevelopment@gmail.com">okodevelopment@gmail.com</span>.

                                                <br></br><span style={{ fontWeight: "bold" }}>Excluding Liability</span><br></br>

                                                The supplier does not take liability for: (i) any fraudulent act or omission, or (ii) death or personal injury caused by negligence or breach of the supplier’s other legal obligations. Subject to this, we are not liable for loss of profit to your business, trade, craft of profession which would not be suffered by a consumer - because we believe you are not buying the services and goods wholly or mainly for your business, trade, craft or profession.

                                                <br></br><span style={{ fontWeight: "bold" }}>Governing law, Jurisdiction and Complaints</span><br></br>

                                                The contract (including any non-contractual matters) is governed by the law of Scotland.
                                                Disputes can be submitted to the jurisdiction of the courts of Scotland.
                                                We try to avoid any dispute, so we deal with complaints by emailing <a style={{ color: 'blue' }} href="mailto: okodevelopment@gmail.com">okodevelopment@gmail.com</a>.

                                            </MDBCollapse>
                                        <br></br>

                                    </MDBContainer>
                                </div>

                            </React.Fragment>
                        }
                    </div>


                    <button onClick={this.login}>
                        {this.state.isLoginView ? 'Login' : 'Register'}
                    </button>
                    <p onClick={this.toggleView}>
                        {this.state.isLoginView ?
                            <React.Fragment>
                                <a>Create Account</a>
                                <br></br><br></br>
                                <a>Forgot Password?</a>
                            </React.Fragment>
                            : <a>Back to Login</a>}
                    </p>
                </div >

            </React.Fragment>

        );
    }
}

export default withCookies(Login);
