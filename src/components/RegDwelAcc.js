import React, { Component } from 'react';
import '../index.css';
import RegisterDwelling from './RegisterDwelling';
import { withCookies } from 'react-cookie';
import { MDBContainer, MDBCollapse } from 'mdbreact';
import { Button } from 'react-bootstrap';

function GuidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    var S2 = S4() + "-" + S4();
    console.log(S2);
    return (S2);
}

class DwelForm extends Component {
    state = {
        credentials: {

            address: '',
            homeUsername: '',
            ownerUsername: '',
            collapseID: ''
        }
    }
    inputChanged = event => {
        let cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });
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

    register = event => {
        console.log(this.state.credentials);
        fetch('oko-api.herokuapp.com/account/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <img src={require('../images/background4.jpeg')} style={{ width: '100%', position: 'absolute' }}></img>
                <div class="centered" style={{ marginTop: '0px', width: '100%' }}>

                    <div className="login-container">
                        <h1 className="login">Register Dwelling</h1>
                        <br></br>
                        <span className="login-fill"><span style={{ color: "red" }}>*</span>Address</span><br />
                        <input type="text" name="address" value={this.state.credentials.address} onChange={this.inputChanged} /><br />
                        <span className="login-fill"><span style={{ color: "red" }}>*</span>House Username</span><br />
                        <input type="text" name="homeUsername" value={this.state.credentials.homeUsername} onChange={this.inputChanged} /><br />
                        <span className="login-fill"><span style={{ color: "red" }}>*</span>Home Owner Username</span><br />
                        <input type="text" name="ownerUsername" value={this.state.credentials.ownerUsername} onChange={this.inputChanged} /><br />
                        <div>
                            <h3>Unique Dwelling code</h3>
                            <h4><GuidGenerator /></h4>
                        </div>
                        <a href="/Oko/RegisterUser"><button onClick={this.register} className="login_button">Register Dwelling</button></a>
                        <a href="/Oko/EnterCode" style={{ color: '#38687E' }}>Enter Dwelling Code</a><br></br>
                        <a href="/" style={{ color: '#38687E' }}>Back to Login</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default withCookies(DwelForm);