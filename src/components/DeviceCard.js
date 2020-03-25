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
                                    
                        <Card style={{ width: '30rem'}}>
                            <Card.Body>
                                <Card.Title>{device.name} <Toggle/></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Device Info</Card.Subtitle>
                                <Card.Text>
                                    <Tabs defaultActiveKey="data" transition={false} id="noanim-tab-example">
                                        <Tab eventKey="data" title="Data">
                                            <ChartsPageDevices/>
                                        </Tab>
                                        <Tab eventKey="settings" title="Settings">
                                            <ListGroup style={{paddingTop:'6.5%'}}>
                                                <ListGroup.Item>Disconnect Device</ListGroup.Item>
                                                <ListGroup.Item>Move Rooms</ListGroup.Item>
                                                <ListGroup.Item>Set User Permissions for this device</ListGroup.Item>
                                            </ListGroup>
                                        </Tab>
                                    </Tabs>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </React.Fragment>
                )
            })}
        </div>

    )
}

export default DeviceCard;
