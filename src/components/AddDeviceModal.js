import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Form from 'react-bootstrap/Form';

class AddDevice extends Component {
  state = {
    modal: false,
    credentials: {
      device_code: 'ABC-XYZ_1_2',
      device_name: '',
      mac_address: '0',
      energy_used: '0',
      state: false,
      room: 'ABC-XYZ_1'
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  inputChanged = event => {
    let cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  }

  registerDevice = event => {
    console.log(this.state.credentials);
    fetch('https://oko-api.herokuapp.com/dwelling/device/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.credentials)
    }).then(res => {
      console.log(res.token);
    })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle}>Add a New Device</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle} style={{color:'black'}}>Add a Device</MDBModalHeader>
          <MDBModalBody>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label style={{color: 'black'}}>Device Name</Form.Label>
                <input type="name" name="device_name" placeholder="Example device" value={this.state.credentials.device_name} onChange={this.inputChanged}/>
              </Form.Group>
            </Form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={this.registerDevice}>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default AddDevice;
