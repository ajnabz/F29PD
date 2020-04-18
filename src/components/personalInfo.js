import React from 'react'
import Card from 'react-bootstrap/Card';
import AccountPopup from "./accountPopup";

function PersonalInfo(props) {

    return (

        <div>
            {props.userAccount.map(userAccount => {

                const first_name = userAccount.first_name;
                const surname = userAccount.surname;
                const name = `${first_name} ${surname}`;
                const username = userAccount.username;
                const tel = userAccount.phone_number;
                const email = userAccount.email;
                const password = userAccount.password;
                const code = userAccount.dwelling_code;
                const incent_choice = userAccount.incentivisation_choice;
                const goal = userAccount.goal;

                if (code === "ABC-XYZ") {

                    return (

                        <div>
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
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Password:</span> *****
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
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Incentivisation Choice:</span> {incent_choice}
                                        </Card.Text>
                                        <hr></hr>
                                        <Card.Text>
                                            <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Goal</span> {goal}
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
                        </div>
                    )
                }
            })}
        </div>

    )
}
export default PersonalInfo;