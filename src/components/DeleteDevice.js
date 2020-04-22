import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class DeleteDevice extends Component {
    state = {
        device_code: this.props.dataFromParent,
 
    }

    deleteDevice(event) {
        fetch(`https://oko-api.herokuapp.com/dwelling/device/${this.props.dataFromParent}/`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
         
        }).then((response) => response.json())
            .catch((error) => {
                throw (error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Button onClick={this.deleteDevice}>Delete</Button>
            </div>
        );
    }
}

export default DeleteDevice;