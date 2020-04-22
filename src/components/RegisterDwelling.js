import React, { Component } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import RightSidebar from './right-sidebar';
import Footer from './footer';

function GuidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    var S2 = S4() + "-" + S4();
    console.log(S2);
    return (S2);
}

class RegisterDwelling extends Component {

    state = {
        credentials: {
            id: 0,
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
            this.setState.id= "Required";
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
                            <span className="login-fill"><span style={{ color: "red" }}>*</span>id</span><br />
                            <input type="text" name="id" value={this.state.credentials.id} onChange={this.inputChanged} /><br />
                            <span className="login-fill"><span style={{ color: "red" }}>*</span>House Username</span><br />
                            <input type="text" name="dwelling_name" value={this.state.credentials.dwelling_name} onChange={this.inputChanged} /><br />
                            
                            <div>
                                <h3>Unique Dwelling code</h3>
                                <h4> {this.state.credentials.dwelling_code}</h4>
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

export default RegisterDwelling;
