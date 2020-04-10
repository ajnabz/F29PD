import React, {Component} from 'react';

class Colour extends Component {

    constructor(props) {
        super(props);

        this.state = {
            divColor: "white",
            buttonColor: "purple"
        };
    }


  handleButtonClick = () => {
    this.setState({
        divColor: "red",
        buttonColor: "blue"
    })
  }

  render() {
    return (
      <React.Fragment>
        <div style={{background: this.state.divColor}}>This is a button</div>
        <button 
            style={{background: this.state.buttonColor}}
            onClick={this.handleButtonClick}
        >
            Click me!
        </button>
      </React.Fragment>
    );
  }
}

export default Colour;