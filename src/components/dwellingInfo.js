import React from 'react'
import { Card } from 'react-bootstrap';
import Popup from "./Popup";

function DwellingInfo(props) {

    return (

        <div>
            {props.house.map(house => {

                const hName = house.dwelling_name;
                const dCode = house.dwelling_code;
                const dMembers = house.dwelling_members;
                const sUser = house.dwelling_superUsers;

                const csvData = [
                    [hName],
                    [dCode],
                    [dMembers],
                    [sUser]
                ];


                return (

                    <React.Fragment>
                        <table>
                            <tr>
                                <Card className="personalInfoBox">
                                    <Card.Body>
                                        <Card.Title>Dwelling information</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Information stored on you which can be edited or delete at any time.</Card.Subtitle>
                                        <br></br>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Dwelling Name:</span> {hName}
                                        </Card.Text>
                                        <hr></hr>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Dwelling Code:</span> {dCode}
                                        </Card.Text>
                                        <hr></hr>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Dwelling Members:</span> {dMembers}
                                        </Card.Text>
                                        <hr></hr>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Super-Admin(s):</span> {sUser}
                                        </Card.Text>
                                        <tr>
                                            <td>
                                                <Card.Link href="#" style={{ color: "grey" }}>EDIT YOUR INFO</Card.Link>
                                            </td>
                                            <td>
                                                <Popup></Popup>
                                            </td>
                                        </tr>
                                    </Card.Body>
                                </Card>
                            </tr>
                        </table>
                    </React.Fragment>
                )
            })}
        </div>

    )
}
export default DwellingInfo;