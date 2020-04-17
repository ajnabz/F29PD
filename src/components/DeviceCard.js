import React from 'react';
import {
    Nav, Tabs, Tab, Button, Form
} from 'react-bootstrap';
import ChartsPageRooms from './ChartsPageRooms';
import Card from 'react-bootstrap/Card'
import Switch from "react-switch";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

function DeviceCard(props) {

    return (

        <div>
            {props.house.map(house => {

                const code = house.dwelling_code;
                const state = house.room[0].devices[0].state;

                function TSwitch(props) {

                    const handleChange = house => evt => {
                        props.handleChange(house);
                    };

                    return (
                        <label>
                            <Switch onChange={handleChange(house)} />
                        </label>
                    )
                }

                function deviceState() {
                    if(state === true){
                        return(
                            <CheckCircleIcon style={{color: 'green', fontSize:'35px'}}></CheckCircleIcon>
                        );
                    } else if (state === false){
                        return(
                            <CancelIcon style={{color: 'red', fontSize:'35px'}}></CancelIcon>
                        );
                    }
                }

                if (code === "ABC-XYZ") {

                    return (

                        <React.Fragment>
                            <Card style={{ width: '100%' }}>
                                <Card.Body>

                                    <Card.Title>{house.room[0].devices[0].device_name}<div style={{float:'right'}}>{deviceState()}</div></Card.Title>
                                    <div>{TSwitch()}</div>
                                    <Card.Text>
                                        <Tabs defaultActiveKey="data" transition={false} id="noanim-tab-example">
                                            <Tab eventKey="data" title="Data">
                                                <br></br>
                                                <ChartsPageRooms />
                                            </Tab>
                                            <Tab eventKey="settings" title="Manage Device">
                                                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                                                    <Nav variant="pills" defaultActiveKey="/home">
                                                        <Nav.Item>
                                                            <Nav.Link href="#link0">Delete Device</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="#link1">Change Room</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="#link2">Device Permissions</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="#link0">
                                                            <p>Once deleted, the devices and data connected to this room will be lost.</p>
                                                            <br></br>
                                                            <Button>Delete</Button>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="#link1">
                                                            <Form>
                                                                <Form.Group controlId="formBasicEmail">
                                                                    <Form.Control type="name" placeholder="Enter the new room ID" />
                                                                    <Form.Text className="text-muted"> This will be the new room that the device is attached to. </Form.Text>
                                                                </Form.Group>
                                                            </Form>
                                                            <Button>Save</Button>
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="#link2">
                                                            <p>To fill in later</p>
                                                            <Button>Save</Button>
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Tab.Container>
                                            </Tab>
                                        </Tabs>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br></br>
                        </React.Fragment>
                    )
                }
            })}
        </div>

    )
}

export default DeviceCard;
