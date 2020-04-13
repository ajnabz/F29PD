import React, { Component } from 'react';
import '../index.css';
import EnterCode from './EnterCode'
import { Button } from 'react-bootstrap';


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
        return <div>
            <div className="login-container">
                <h1 className="login">Please enter an existing dwelling Code</h1>
                <p>
                    If the continue button doesn't show, please check you have the correct code.
                    Realise that you dont have a dwelling account?
                    </p><br />
                <Button href="/Oko/regDwel" >Click Here</Button>
                <br /> <br />
                <span className="login-fill">If the dwelling code is in recognised thenyou will
                be able to register a user to that dwelling account</span><br />
                <input type="text" name="title" value={this.state.title}
                    onChange={this.handleChange.bind(this)} />
                <EnterCode dataFromParent={this.state.data}
                    show={this.state.showing}
                    house={this.state.house}
                    houseClicked={this.house} />
            </div>
        </div>
    }
}

export default HasDwelCode;