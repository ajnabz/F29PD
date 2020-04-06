import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import RightSidebar from './right-sidebar';
import Footer from './footer';

class RegisterDwelling extends Component {

    state = {
        credentials: {
            address: '',
            homeUsername: '',
            ownerUsername: ''
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
        alert("Dwelling registered");
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

                <div class="grid">
                    <header>
                        <Header></Header>
                    </header>

                    <aside class="sidebar-left">
                        <Sidebar></Sidebar>
                    </aside>

                    <article>
                        <h3>Register Dwelling</h3>
                        <div className="login-container">
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
                            <button onClick={this.register}>Register</button>
                        </div>

                    </article>

                    <aside>
                        <RightSidebar></RightSidebar>
                    </aside>

                    <footer>
                        <Footer></Footer>
                    </footer>

                </div>




            </React.Fragment>

        );
    }

}
function GuidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    var S2 = S4() + "-" + S4();
    console.log(S2);
    return (S2);
}

export default RegisterDwelling;
