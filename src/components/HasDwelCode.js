import React, { Component } from 'react';
import '../App.css';
import EnterCode from './EnterCode'

class HasDwelCode extends Component {
    state = {
        house: [],
        selectedMovie: null,
        data: "",
        showing: false

    }
    componentDidMount() {
        fetch('https://oko-api.herokuapp.com/dwelling/house/', {
            method: 'GET',
            headers: {

            }
        }).then(resp => resp.json())
            .then(resp => this.setState({ house: resp }))
            .catch(error => console.log(error))
    }

    houseClicked = h => {
        console.log(h)
    }
    handleChange(event) {
        this.setState({ data: event.target.value })
    }
    render() {
        return (
            <React.Fragment>
                <img src={require('../images/background4.jpeg')} style={{ width: '100%', position: 'absolute' }}></img>
                <div class="centered" style={{ marginTop: '0px', width: '100%'}}>

                    <div className="login-container">
                        <h1 className="login">Please enter an existing dwelling code</h1>
                        <br /> <br />
                        <span className="login-fill">If the dwelling code is recognised, you will be able to register a user to that dwelling account</span><br />
                        <p>If the continue button doesn't show, please check you have the correct code.</p>
                        <input type="text" name="title" value={this.state.title}
                            onChange={this.handleChange.bind(this)} />
                        <EnterCode dataFromParent={this.state.data}
                            show={this.state.showing}
                            house={this.state.house}
                            houseClicked={this.house} />
                        <br></br>
                        <br></br>
                        <p>Realise that you dont have a dwelling account?</p>
                        <a href="/Oko/RegisterDwelling"><button className="dwellCode_button" style={{width:'30%', margin:'0'}}>Click Here</button></a>
                        <br></br>
                        <br></br>
                        <a href="/" style={{ color: '#38687E' }}>Back to Login</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default HasDwelCode;