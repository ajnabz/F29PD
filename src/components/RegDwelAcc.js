import React, { Component } from 'react';
import '../index.css';
import RegisterDwelling from './RegisterDwelling';
import { withCookies } from 'react-cookie';
import { MDBContainer, MDBCollapse } from 'mdbreact';
import { Button } from 'react-bootstrap';

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
    render() {
        return <div>
            <div className="login-container">
                <h1 className="login">Please Register a Dwelling</h1>
                <br></br>
               
                <span className="login-fill"><span style={{ color: "red" }}>*</span>Address</span><br />
                <input type="text" name="address" value={this.state.credentials.address} onChange={this.inputChanged} /><br />
                <span className="login-fill"><span style={{ color: "red" }}>*</span>House Username</span><br />
                <input type="text" name="homeUsername" value={this.state.credentials.homeUsername} onChange={this.inputChanged} /><br />
                <span className="login-fill"><span style={{ color: "red" }}>*</span>Home Owner Username</span><br />
                <input type="text" name="ownerUsername" value={this.state.credentials.ownerUsername} onChange={this.inputChanged} /><br />
                <RegisterDwelling />
                <Button href="/Oko/regUser" >Continue</Button>
            </div>
        </div>
    }
}
export default withCookies(DwelForm);