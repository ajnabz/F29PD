import React from 'react'
import { Nav, Tabs, Tab, Row, Col, ListGroup, Button, Form, ButtonGroup, Badge, OverlayTrigger, ListGroupItem } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import SectionContainer from './sectionContainer';
import Card from 'react-bootstrap/Card';
import RoomGraph from './RoomGraph';
import AddDevice from './AddDeviceModal';


function RoomCard(props) {
  return (
    <React.Fragment>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title key={props.room.name}>{props.room.room_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <div
            style={{
              position: "absolute",
              right: 0,
              marginRight: "7vw",
            }}
          >
            <Badge variant="success">Suggestions based on your data:</Badge>
            {props.room.suggestion.length > 0 &&
              props.room.suggestion.map((s) => <p>{s.suggestion}</p>)}
          </div>
          <Card.Text>
            <Tabs
              defaultActiveKey="data"
              transition={false}
              id="noanim-tab-example"
            >
              <Tab eventKey="data" title="Data">
                <br></br>
                {props.room.data.length > 0 && (
                  <RoomGraph data={props.room.data[0]}></RoomGraph>
                )}
              </Tab>
              <Tab eventKey="Devices" title="Devices">
                <ListGroup>
                  <br></br>
                  {props.room.devices.length > 0 &&
                    props.room.devices.map((s) =>
                      <ListGroup.Item key={s.device_name}>
                        <span style={{ fontSize: "1.5em" }}>
                          {s.device_name}
                        </span>
                        <Tab.Container
                          id="list-group-tabs-example"
                          defaultActiveKey="#link2"
                        >
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
                              <p>
                                Once deleted, the data connected to this device will
                                be lost.
                        </p>
                              <Button>Delete</Button>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#link1">
                              <Form>
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Control
                                    type="name"
                                    placeholder="Enter a new room name"
                                  />
                                  <Form.Text className="text-muted">
                                    {" "}
                              This will be the new name given to the room from
                              now on.{" "}
                                  </Form.Text>
                                </Form.Group>
                              </Form>
                              <Button>Save</Button>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </ListGroup.Item>)}
                  <ListGroup.Item>
                    <ButtonGroup size="md">
                      <a href="/Oko/Devices">
                        <Button>View all devices</Button>
                      </a>
                      <a>
                        <AddDevice dataFromParent ={props.room.room_code} />
                      </a>
                    </ButtonGroup>
                  </ListGroup.Item>
                </ListGroup>
              </Tab>
              <Tab eventKey="Manage Room" title="Manage Room">
                <br></br>
                <br></br>
                <Tab.Container
                  id="list-group-tabs-example"
                  defaultActiveKey="#link1"
                >
                  <Row>
                    <Col sm={4}>
                      <ListGroup>
                        <ListGroupItem action href="#link2">
                          Delete Room
                          </ListGroupItem>
                        <ListGroupItem action href="#link3">
                          Change Room Name
                          </ListGroupItem>
                      </ListGroup>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey="#link2">
                          <h4>
                            Are you sure you want to delete "
                              {props.room.room_name}"?
                            </h4>
                          <p>
                            Once deleted, the devices and data connected to this
                            room will be lost.
                            </p>
                          <br></br>
                          <Button>Delete</Button>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                          <h4>Change Room Name</h4>
                          <p>Change name from:"{props.room.room_name}" to:</p>
                          <Form>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control
                                type="name"
                                placeholder="Enter a new room name"
                              />
                              <Form.Text className="text-muted">
                                {" "}
                                  This will be the new name given to the room from
                                  now on.{" "}
                              </Form.Text>
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
  );
}
export default RoomCard;
