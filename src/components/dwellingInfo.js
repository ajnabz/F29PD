import React from 'react'
import Card from 'react-bootstrap/Card';
import DwellingPopup from "./dwellingPopup";

function DwellingInfo(props) {

    return (

        <div>
            {props.house.map(house => {

                const hName = house.dwelling_name;
                const dCode = house.dwelling_code;
                const dMembers = house.dwelling_members;
                const sUser = house.dwelling_superUsers;

                if (dCode === "ABC-XYZ") {

                    return (

                        <div>
                            <table>
                                <tr>
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
                                        <hr></hr>
                                        <tr>
                                            <td>
                                                <Card.Link href="#" style={{ color: "grey" }}>EDIT YOUR INFO</Card.Link>
                                            </td>
                                            <td>
                                                <DwellingPopup></DwellingPopup>
                                            </td>
                                        </tr>
                                    </Card.Body>
                                </tr>
                            </table>
                        </div>
                    );
                }
            })}
        </div>

    )
}
export default DwellingInfo;