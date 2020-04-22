import React from 'react';
import Card from 'react-bootstrap/Card';
import DwellingPopup from "./dwellingPopup";

function DwellingInfo(props) {

    return (

        <div>
            {props.house.map(house => {

                const hName = house.dwelling_name;
                const dCode = house.dwelling_code;

                if (dCode === "ABC-XYZ") {

                    return (

                        <div>
                            <table>
                                <tr>
                                    <Card.Body>
                                        <Card.Title>Home information</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Information stored on your house which can be edited or delete at any time.</Card.Subtitle>
                                        <br></br>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>House Name:</span> {hName}
                                        </Card.Text>
                                        <hr></hr>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>House Code:</span> {dCode}
                                        </Card.Text>

                                        <hr></hr>
                                        <table>
                                            <tr>
                                                <td>
                                                    <Card.Link href="#" style={{ color: "grey" }}>EDIT YOUR INFO</Card.Link>
                                                </td>
                                                <td>
                                                    <DwellingPopup></DwellingPopup>
                                                </td>
                                            </tr>
                                        </table>
                                    </Card.Body>
                                </tr>
                            </table>
                        </div>
                    );
                }
            })}
        </div>

    );
}
export default DwellingInfo;