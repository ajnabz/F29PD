import React, { Component } from 'react';

class Login extends Component {

    state = {
        credentials: {
            goal: ''
        },
        isLoginView: true
    }

    


    inputChanged = event => {
        let cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });
    }

    login = event => {
        var goal = this.state.credentials.goal;
        console.log(goal);

    }

    render() {
        return (

            <React.Fragment>
                <input type="text" name="goal" value={this.state.credentials.goal} onChange={this.inputChanged} /><br />
                <button onClick={this.login}>
                    Submit
                </button>
                <p>{this.state.credentials.goal}</p>
            </React.Fragment>
        );
    }
}

export default Login;
