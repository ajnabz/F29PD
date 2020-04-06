import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { Card } from 'react-bootstrap';
import '../App.css';
 
class DwellingPopup extends Component {
  state = {
    modal1: false  
  };

  toggle = nr => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    const {
      modal1
    } = this.state;

    return (
        <div>
          <Card.Link onClick={this.toggle(1)} style={{ color: "#136CFF", position: 'absolute', right: 50 }}>DELETE YOUR DWELLING</Card.Link>

          <MDBModal backdrop={false} isOpen={modal1} toggle={this.toggle(1)}>
            <MDBModalHeader toggle={this.toggle(1)}>Delete your dwelling</MDBModalHeader>
            <MDBModalBody>
              Your dwelling will be permantely deleted and all of the information will be erased. Do you wish to continue?
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='primary' onClick={this.toggle(1)}>
                Close
              </MDBBtn>
              <MDBBtn color='danger'>Delete dwelling</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </div>
    );
  }
}

export default DwellingPopup;
