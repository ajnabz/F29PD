import React, { Component } from 'react';
import TSwitch from './tSwitch';

class Toggle extends Component {

  componentDidMount() {
    fetch('https://oko-api.herokuapp.com/dwelling/house/', {
      method: 'GET',
      headers: {
        //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
      }
    }).then(resp => resp.json())
      .then(resp => this.setState({house: resp}))
      .catch(error => console.log(error))
  }

  houseClicked = h => {
    console.log(h)
  }

  constructor() {
    super();
    this.state = {
      checked: false,
      house: [],
      selectedHouse: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <React.Fragment>
          <TSwitch handleChange={this.handleChange.bind(this)} house={this.state.house} houseClicked={this.h}></TSwitch>
      </React.Fragment>

    );
  }
}

export default Toggle;