
import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types';

class AddRoom extends Component {
  state = {
    modal: false,
    credentials: {
      room_name: ''
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
      body: JSON.stringify(this.state.credentials)
    }).then(res => {
      console.log(res.token);
      this.props.cookies.set('token', res.token);
      window.location.href = "/Oko/Rooms"
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
                <Form.Control type="name" placeholder="Example device" value={this.state.credentials.room_name} onChange={this.inputChanged}/>
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