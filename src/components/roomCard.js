import React from 'react'
import { Tabs, Tab, Card, ListGroup, Button, ButtonGroup, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import SectionContainer from './sectionContainer';

function RoomCard(props) {

    return (

        <div>
            {props.room.map(room => {

                let dataSet_temperature = room.room_data[0].tempurature;
                var dataArray_temperature = dataSet_temperature.split(' ', 24);

                let dataSet_humidity = room.room_data[0].humidity;
                var dataArray_humidity = dataSet_humidity.split(' ', 24);
                

                const dataLine = {
                    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
                    datasets: [
                        {
                            label: 'temperature',
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
                            label: 'humidity',
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

                let suggestionToolTip = room.suggestion[0].suggestion;

                return (

                    <React.Fragment>
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title key={room.name}>{room.room_name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                </Card.Subtitle>
                                <div style={{ position: 'absolute', right: 0, marginRight: '7vw' }}>
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}>
                                        <Badge variant="success">Suggestions based on your data</Badge>
                                    </OverlayTrigger>
                                    <p>{suggestionToolTip}</p>

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
                                                <ListGroup.Item key={room.device_name}>{room.devices[0].device_name}</ListGroup.Item>
                                                <ListGroup.Item>
                                                    <ButtonGroup size="md">
                                                        <a href="/Oko/Devices"><Button>View all devices</Button></a>
                                                        <a><Button>Add Device to Room</Button></a>
                                                    </ButtonGroup>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Tab>
                                    </Tabs>
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
export default RoomCard;