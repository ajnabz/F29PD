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

  

  render(props) {

    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle} style={{color: 'black'}}>Add a New Room</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle} style={{ color: 'black' }}>Add Room</MDBModalHeader>
          <MDBModalBody>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label style={{ color: 'black' }}>Room Name</Form.Label>
                <input type="text" name="room_name" placeholder="Example device" value={this.state.credentials.room_name} onChange={this.inputChanged} />
                <Form.Label style={{ color: 'black' }}>Room Code</Form.Label>
                <input type="text" name="room_code" placeholder="Example device" value={this.state.credentials.room_code} onChange={this.inputChanged} />
              </Form.Group>
            </Form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={this.registerRoom}>Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default AddRoom;