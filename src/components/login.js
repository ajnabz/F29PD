import React, { Component } from 'react';
import '../index.css';
import { withCookies } from 'react-cookie';
import okologo from '../images/okologotext.png';

class Login extends Component {

    state = {
        credentials: {
            username: '',
            password: '',
            collapseID: '',
            logged_in: true
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
    }


    login = event => {
        if (this.state.isLoginView) {
            console.log(this.state.credentials);
            fetch(`https://oko-api.herokuapp.com/account/users/${this.state.credentials.username}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state.credentials)
            }).then(res => {
                if(res.ok) {
                    console.log(res.token);
                    this.props.cookies.set('token', res.token);
                    window.location.href = '/Oko'
                } else {
                    alert("Login failed, please re-enter your details")
                    window.location.href = '/'
                }
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
                <img src={require('../images/background4.jpeg')} style={{ width: '100%', position: 'absolute' }} className="login_img1"></img>
                <img src={require('../images/background4.jpeg')} className="login_img2"></img>

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
                                <input type="text" name="username" value={this.state.credentials.username}
                                    onChange={this.inputChanged} /><br />
                                <span className="login-fill">Password</span><br />
                                <input type="password" name="password" value={this.state.credentials.password}
                                    onChange={this.inputChanged} />
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <div>
                                    <br></br>
                                    <br></br>
                                    <h3>Do you have a home account?</h3>
                                    <br></br>
                                    <table style={{ width: '100%' }}>
                                        <tr>
                                            <td style={{ width: '50%' }}>
                                                <a href="/Oko/EnterCode"><button className="dwellCode_button" style={{marginBottom: '5em'}}>Yes</button></a>
                                            </td>
                                            <td style={{ width: '50%' }}>
                                                <a href='/Oko/RegisterDwelling'><button className="dwellCode_button" style={{marginBottom: '5em'}}>No</button></a>
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
                                <button className='dwellCode_button'>Create Account</button>
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
