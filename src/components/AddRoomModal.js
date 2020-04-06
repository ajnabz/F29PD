
import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Form from 'react-bootstrap/Form'
class AddRoom extends Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Add Room</MDBModalHeader>
          <MDBModalBody>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Room Name</Form.Label>
                <Form.Control type="name" placeholder="Example device" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Room ID</Form.Label>               
                <Form.Control type="name" placeholder="1" />
              </Form.Group>
            </Form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default AddRoom;