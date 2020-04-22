import React, { Component } from 'react';
import '../index.css';
import { withCookies } from 'react-cookie';

function GuidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    var S2 = S4() + S4();
    console.log(S2);
    return (S2);
}

class DwelForm extends Component {

    state = {
        credentials: {
            id: 15,
            dwelling_code: GuidGenerator(),
            dwelling_name: '',
            has_superAdmin: true

        }
    }

    inputChanged = event => {
        let cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });

        if (!this.state.id) {
            this.setState.id = "Required";
        } else if (this.state.id > /^(?=.{2,})/i) {
            this.setState.lastname = "id is too long";
        }

        if (!this.state.dwelling_name) {
            this.setState.dwelling_name = "Required";
        } else if (this.state.dwelling_name > /^(?=.{20,})/i) {
            this.setState.dwelling_name = "Username is too long";
        }
    }
    register = event => {
        console.log(this.state.credentials);
        fetch('https://oko-api.herokuapp.com/dwelling/house/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <img src={require('../images/background4.jpeg')} style={{ width: '100%', position: 'absolute' }} className="login_img1"></img>
                <img src={require('../images/background4.jpeg')} className="login_img2"></img>
                <div class="centered" style={{ marginTop: '0px', width: '100%' }}>

                    <div className="login-container">
                        <h1 className="login">Register your home</h1>
                        <br></br>
                        <span className="login-fill"><span style={{ color: "red" }}>*</span>House Username</span><br />
                        <input type="text" name="dwelling_name" value={this.state.credentials.dwelling_name} onChange={this.inputChanged} /><br />

                        <div>
                            <h3>Unique house code</h3>
                            <h4> {this.state.credentials.dwelling_code}</h4>
                        </div>
                        <a href="/Oko/RegisterUser"><button onClick={this.register} className="login_button">Register Home</button></a>
                        <a href="/Oko/EnterCode" style={{ color: '#38687E' }}>Enter House Code</a><br></br>
                        <a href="/" style={{ color: '#38687E' }}>Back to Login</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default withCookies(DwelForm);