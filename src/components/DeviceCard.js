import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import ChartsPageDevices from './ChartsPageDevices';
import ListGroup from 'react-bootstrap/ListGroup'
import Toggle from './ToggleSwitch'



function DeviceCard(props) {

    return (

        <div>
            {props.device.map(device => {

                return (

                    <React.Fragment>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>{device.device_name} <Toggle /></Card.Title>
                                <Card.Text>
                                    <ListGroup style={{ paddingTop: '1.5%' }}>
                                        <ListGroup.Item>Disconnect Device</ListGroup.Item>
                                        <ListGroup.Item>Move Rooms</ListGroup.Item>
                                        <ListGroup.Item>Set User Permissions for this device</ListGroup.Item>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <br></br>
                    </React.Fragment>
                )
            })}
        </div>

    )
}

export default DeviceCard;
