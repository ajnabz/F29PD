import React from 'react'
import { Nav, Tabs, Tab, Row, Col, ListGroup, Button, Form, ButtonGroup, Badge, OverlayTrigger, ListGroupItem } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import SectionContainer from './sectionContainer';
import Card from 'react-bootstrap/Card';

function RoomCard(props) {

    return (

        <div>
            {props.room.map(room => {


                let dwellCode = room.related_dwelling;

                let dataSet_temperature = room.data[0].temperature;
                var dataArray_temperature = dataSet_temperature.split(',', 24);

                let dataSet_humidity = room.data[0].humidity;
                var dataArray_humidity = dataSet_humidity.split(',', 24);


                const dataLine = {
                    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
                    datasets: [
                        {
                            label: 'temperature °C',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: dataArray_temperature
                        },
                        {
                            label: 'humidity %',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(231, 76, 60)',
                            borderColor: 'rgba(231, 76, 60)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(231, 76, 60)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(231, 76, 60)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: dataArray_humidity
                        }
                    ]
                };

                let suggestions = room.suggestion[0].suggestion;

                if (dwellCode === 4) {

                    return (
    
                        <React.Fragment>
                            <Card style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title key={room.name}>{room.room_name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                    </Card.Subtitle>
                                    <div style={{ position: 'absolute', right: 0, marginRight: '7vw' }}>
                                        <Badge variant="success">Suggestions based on your data:</Badge>
                                        <p>{suggestions}</p>
                                    </div>
                                    <Card.Text>
                                        <Tabs defaultActiveKey="data" transition={false} id="noanim-tab-example">
                                            <Tab eventKey="data" title="Data">
                                                <br></br>
                                                <MDBContainer>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <SectionContainer>
                                                                <Line data={dataLine} options={{ responsive: true }} />
                                                            </SectionContainer>
                                                        </div>
                                                    </div>
                                                </MDBContainer>
                                            </Tab>
                                            <Tab eventKey="Devices" title="Devices">
                                                <ListGroup>
                                                    <br></br>
                                                    <ListGroup.Item key={room.device_name}><span style={{ fontSize: '1.5em' }}>{room.devices[0].device_name}</span>
                                                        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link2">
                                                            <Nav variant="pills" defaultActiveKey="/home">
                                                                <Nav.Item>
                                                                    <Nav.Link href="#link0">Delete</Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="#link1">Change Name</Nav.Link>
                                                                </Nav.Item>
                                                            </Nav>
                                                            <br></br>
                                                            <Tab.Content>
                                                                <Tab.Pane eventKey="#link0">
                                                                    <p>Once deleted, the data connected to this device will be lost.</p>
                                                                    <Button>Delete</Button>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="#link1">
                                                                    <Form>
                                                                        <Form.Group controlId="formBasicEmail">
                                                                            <Form.Control type="name" placeholder="Enter a new device name" />
                                                                            <Form.Text className="text-muted"> This will be the new name given to the room from now on. </Form.Text>
                                                                        </Form.Group>
                                                                    </Form>
                                                                    <Button>Save</Button>
                                                                </Tab.Pane>
                                                            </Tab.Content>
                                                        </Tab.Container>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                        <ButtonGroup size="md">
                                                            <a href="/Oko/Devices"><Button>View all devices</Button></a>
                                                            <a><Button>Add Device to Room</Button></a>
                                                        </ButtonGroup>
                                                    </ListGroup.Item>
                                                </ListGroup>
                                            </Tab>

                                            <Tab eventKey="Manage Room" title="Manage Room">
                                                <br></br>
                                                <br></br>
                                                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                                                    <Row>
                                                        <Col sm={4}>
                                                            <ListGroup>
                                                                <ListGroupItem action href="#link2">Delete Room</ListGroupItem>
                                                                <ListGroupItem action href="#link3">Change Room Name</ListGroupItem>

                                                            </ListGroup>
                                                        </Col>
                                                        <Col sm={8}>
                                                            <Tab.Content>

                                                                <Tab.Pane eventKey="#link2">
                                                                    <h4>Are you sure you want to delete "{room.room_name}"?</h4>
                                                                    <p>Once deleted, the devices and data connected to this room will be lost.</p>
                                                                    <br></br>
                                                                    <Button>Delete</Button>
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="#link3">
                                                                    <h4>Change Room Name</h4>
                                                                    <p>Change name from:"{room.room_name}" to:</p>
                                                                    <Form>
                                                                        <Form.Group controlId="formBasicEmail">
                                                                            <Form.Control type="name" placeholder="Enter a new room name" />
                                                                            <Form.Text className="text-muted"> This will be the new name given to the room from now on. </Form.Text>
                                                                        </Form.Group>
                                                                    </Form>
                                                                    <Button>Save</Button>
                                                                </Tab.Pane>
                                                            </Tab.Content>
                                                        </Col>
                                                    </Row>
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
export default RoomCard;
