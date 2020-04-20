import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Form from 'react-bootstrap/Form'


class AddRoom extends Component {
  state = {
    modal: false,
    credentials: {
      room_code: 'ABC-XYZ_5',
      related_dwelling: '4',
      room_name: 'Connors Bedroom',
      data: {
        related_room: 'ABC-XYZ_5',
        co2: '0',
        humidity: '0',
        temperature: '0'
      },
      devices:{
        device_code: 'ABC-XYZ_5_1',
        device_name: 'Fridge',
        mac_address: '0',
        energy_used: '0',
        state: false,
        room: 'ABC-XYZ_5'
      },
      suggestion: {
        id: '',
        related_room: 'ABC-XYZ_5',
        suggestion: 'Kick out Connor'
      }
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

  registerRoom = event => {
    console.log(this.state.credentials);
    fetch('https://oko-api.herokuapp.com/dwelling/room/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        room_code: this.state.credentials.room_code,
        related_dwelling: this.state.credentials.related_dwelling,
        room_name: this.state.credentials.room_name,
    })
    }).then(res => {
      console.log(res.token);
    })
      .catch(error => console.log(error))
  }

  registerDevice = event => {
    console.log(this.state.credentials);
    fetch('https://oko-api.herokuapp.com/dwelling/device/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        device_code: this.state.credentials.devices.device_code,
        device_name: this.state.credentials.devices.device_name,
        mac_address: this.state.credentials.devices.mac_address,
        energy_used: this.state.credentials.devices.energy_used,
        state: this.state.credentials.devices.state,
        room: this.state.credentials.devices.room
      })
    }).then(res => {
      console.log(res.token);
    })
      .catch(error => console.log(error))
  }

  registerData = event => {
    console.log(this.state.credentials);
    fetch('https://oko-api.herokuapp.com/dwelling/data/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        related_room: this.state.credentials.data.related_room,
        co2: this.state.credentials.data.co2,
        humidity: this.state.credentials.data.humidity,
        temperature: this.state.credentials.data.temperature
      })
    }).then(res => {
      console.log(res.token);
    })
      .catch(error => console.log(error))
  }

  registerSuggestion = event => {
    console.log(this.state.credentials);
    fetch('https://oko-api.herokuapp.com/dwelling/suggestion/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: this.state.credentials.suggestion.id,
        related_room: this.state.credentials.suggestion.related_room,
        suggestion: this.state.credentials.suggestion.suggestion
      })
    }).then(res => {
      console.log(res.token);
    })
      .catch(error => console.log(error))
  }

  render(props) {

    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle}>Add a New Room</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle} style={{ color: 'black' }}>Add Room</MDBModalHeader>
          <MDBModalBody>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label style={{ color: 'black' }}>Room Name</Form.Label>
                <input type="text" name="room_name" placeholder="Example device" value={this.state.credentials.room_name} onChange={this.inputChanged} />
                <Form.Label style={{ color: 'black' }}>Device Name</Form.Label>
                <input type="text" name="device_name" placeholder="Example device" value={this.state.credentials.devices.device_name} onChange={this.inputChanged} />
              </Form.Group>
            </Form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={this.registerRoom} onClick={this.registerData} onClick={this.registerDevice} onClick={this.registerSuggestion}>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default AddRoom;