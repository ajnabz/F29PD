import React, { Component } from 'react';
import '../index.css';
import { withCookies } from 'react-cookie';
import okologo from '../images/okologotext.png';

class Login extends Component {

    state = {
        credentials: {
            username: '',
            email: '',
            collapseID: '',
            logged_in: true
        },
        isLoginView: true,
        userAccount: []
    }

    componentDidMount() {
        fetch(`https://oko-api.herokuapp.com/account/users/${this.state.credentials.username}`, {
            method: 'GET',
            headers: {
                //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
            }
        }).then(resp => resp.json())
            .then(resp => this.setState({ userAccount: resp }))
            .catch(error => console.log(error))
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
    }

    login = event => {
        console.log(this.state.credentials);
        fetch(`https://oko-api.herokuapp.com/account/users/${this.state.credentials.username}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials.email, this.state.credentials.logged_in)
        }).then(res => {
            console.log(res.token);
        })
            .catch(error => console.log(error))
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

                <div className="centered">

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
                                                <a href="/Oko/EnterCode"><button className="dwellCode_button" style={{ marginBottom: '5em' }}>Yes</button></a>
                                            </td>
                                            <td style={{ width: '50%' }}>
                                                <a href='/Oko/RegisterDwelling'><button className="dwellCode_button" style={{ marginBottom: '5em' }}>No</button></a>
                                            </td>
                                        </tr>
                                    </table>
                                    <br></br>
                                </div>
                            </React.Fragment>
                        }
                    </div>

                    <a href="/Oko"><button className="login_button">Login</button></a>


                    <p onClick={this.toggleView}>
                        {this.state.isLoginView ?
                            <React.Fragment>
                                <br></br>
                                <button className='dwellCode_button'>Create Account</button>
                                <br></br><br></br>
                                <a href="/Oko/ForgottenPassword" style={{ color: '#38687E' }}>Forgot Password?</a><br></br>
                                <a href="https://flonne.me/" target='_blank' style={{ color: '#38687E', fontWeight:'bold' }}>Want to find out more about ÖKO?</a>
                            </React.Fragment>
                            : <a>Back to Login</a>}
                    </p>
                </div >

            </React.Fragment>

        );
    }
}

export default withCookies(Login);
