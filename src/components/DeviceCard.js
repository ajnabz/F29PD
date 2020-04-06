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
            {props.house.map(house => {
                
                const code = house.dwelling_code;
                
                if (code === "XJE2-LHA") {

                    return (

                        <React.Fragment>
                            <Card style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title>{house.rooms[0].devices[0].device_name} <Toggle /></Card.Title>
                                    <Card.Text>
                                        <ListGroup style={{ paddingTop: '1.5%' }}>
                                            <ListGroup.Item>Delete Device</ListGroup.Item>
                                            <ListGroup.Item>Manage Device</ListGroup.Item>
                                        </ListGroup>
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
