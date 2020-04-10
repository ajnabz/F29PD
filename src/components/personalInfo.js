import React from 'react'
import { Card } from 'react-bootstrap';
import AccountPopup from "./accountPopup";

function PersonalInfo(props) {

    return (

        <div>
            {props.house.map(house => {

                const name = house.dwelling_name;
                const username = ["gCol"];
                const DOB = ["02/04/1999"];
                const address = ["123 Fake street"];
                const tel = ["075166284064"];
                const email = ["gemmaC@gmail.com"];
                const password = ["123Gemma30"];
                const code = house.dwelling_code;

                const csvData = [
                    [name],
                    [username],
                    [DOB],
                    [address],
                    [tel],
                    [email],
                    [password]
                ];


                if (code === "XYZ-ABC") {

                    return (

                        <React.Fragment>
                            <table>
                                <tr>
                                    <Card.Body>
                                        <Card.Title>Personal information</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Information stored on you which can be edited or delete at any time.</Card.Subtitle>
                                        <br></br>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Name:</span> {name}
                                        </Card.Text>
                                        <hr></hr>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Username:</span> {username}
                                        </Card.Text>
                                        <hr></hr>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Password:</span> {password}
                                        </Card.Text>
                                        <hr></hr>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Date Of Birth:</span> {DOB}
                                        </Card.Text>
                                        <hr></hr>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Address:</span> {address}
                                        </Card.Text>
                                        <hr></hr>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Phone Number:</span> {tel}
                                        </Card.Text>
                                        <hr></hr>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Email Address:</span> {email}
                                        </Card.Text>
                                        <hr></hr>
                                        <tr>
                                            <td>
                                                <Card.Link href="#" style={{ color: "grey" }}>EDIT YOUR INFO</Card.Link>
                                            </td>
                                            <td>
                                                <AccountPopup></AccountPopup>
                                            </td>
                                        </tr>
                                    </Card.Body>
                                </tr>
                            </table>
                        </React.Fragment>
                    )
                }
            })}
        </div>

    )
}
export default PersonalInfo;