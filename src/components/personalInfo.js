import React from 'react'
import Card from 'react-bootstrap/Card';
import AccountPopup from "./accountPopup";
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import { CSVLink } from "react-csv";

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

                const csvData = [
                    [name],
                    [username],
                    [tel],
                    [email],
                    [password],
                    [code],
                    [incent_choice],
                    [goal]
                  ];

                function setGoalText() {
                    if (incent_choice === 'HE') {
                        return (
                            <Card.Text>
                                Set your goal for how much energy you want to save in kWh, per month
                            </Card.Text>
                        );

                    } else if (incent_choice === 'SM') {
                        return (
                            <Card.Text>
                                Set your goal for how much money you want to save in £, per month
                            </Card.Text>
                        );
                    }
                }

                if (code === "ABC-XYZ") {

                    return (
                        <div>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Set Your Goal</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                    <div>{setGoalText()}</div>
                                    <hr></hr>
                                    <tr>
                                        <Card.Text class="setting-devices">
                                            Please enter your goal:
                                        </Card.Text>
                                    </tr>
                                    <tr>
                                        <input type="text" name="goal" value={props.cred.goal} onChange={props.inputChanged} /><br />
                                        <button onClick={props.setGoal} className="dwellCode_button">
                                            Submit
                                        </button>
                                    </tr>
                                </Card.Body>
                            </Card>
                            <br></br>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Admin Account Types</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                    <Card.Text>
                                        Different admin privileges
                                      </Card.Text>
                                    <hr></hr>
                                    <tr>
                                        <td>
                                            <tr>
                                                <Card.Text class="setting-devices">
                                                    Super-Admin
                                            </Card.Text>
                                            </tr>
                                            <tr>
                                                <Card.Text class="setting-devices" style={{ fontSize: '0.8em' }}>
                                                    See other account members details and set permissions
                                            </Card.Text>
                                            </tr>
                                        </td>
                                        <td>
                                            <PersonAddTwoToneIcon style={{ position: 'absolute', right: 50 }}></PersonAddTwoToneIcon>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <tr>
                                                <Card.Text class="setting-devices">
                                                    Admin
                                            </Card.Text>
                                            </tr>
                                            <tr>
                                                <Card.Text class="setting-devices" style={{ fontSize: '0.8em' }}>
                                                    See other account members details
                                      </Card.Text>
                                            </tr>
                                        </td>
                                        <td>
                                            <PeopleAltTwoToneIcon style={{ position: 'absolute', right: 50 }}></PeopleAltTwoToneIcon>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <tr>
                                                <Card.Text class="setting-devices">
                                                    Non-Admin
                                      </Card.Text>
                                            </tr>
                                            <tr>
                                                <Card.Text class="setting-devices" style={{ fontSize: '0.8em' }}>
                                                    See other account members names
                                      </Card.Text>
                                            </tr>
                                        </td>
                                        <td>
                                            <PersonOutlineTwoToneIcon style={{ position: 'absolute', right: 50 }}></PersonOutlineTwoToneIcon>
                                        </td>
                                    </tr>
                                    <Card.Link href="/Oko/Settings/Admin">CHANGE YOUR ACCOUNT TYPE</Card.Link>
                                </Card.Body>
                            </Card>
                            <br></br>

                            <table class="securityRow">
                                <tr>
                                    <td>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Signing in</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                                <Card.Text>
                                                    An added level of security to ensure you are the only person that can access your account
                                            </Card.Text>
                                                <hr></hr>
                                                <Card.Link href="#" style={{ color: "grey" }}>TWO-STEP VERIFICATION</Card.Link>
                                            </Card.Body>
                                        </Card>
                                    </td>
                                    <td>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>Life Time Data</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                                <Card.Text>
                                                    Download a CSV file to see your lifetime data. This will show you what information is being stored about your account.
                                            </Card.Text>
                                                <hr></hr>
                                                <CSVLink data={csvData}>DOWNLOAD YOUR DATA</CSVLink>
                                            </Card.Body>
                                        </Card>
                                    </td>
                                </tr>
                            </table>

                            <table class="securityColumn">
                                <tr>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Signing in</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                            <Card.Text>
                                                An added level of security to ensure you are the only person that can access your account or to reach out if there is suspicious activity in your account.
                                          </Card.Text>
                                            <hr></hr>
                                            <Card.Link href="#" style={{ color: "grey" }}>TWO-STEP VERIFICATION</Card.Link>
                                        </Card.Body>
                                    </Card>
                                </tr>
                                <br></br>
                                <tr>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Life Time Data</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                            <Card.Text>
                                                Download a CSV file to see your lifetime data. This will show you what information is being stored about your account.
                                          </Card.Text>
                                            <hr></hr>
                                            <CSVLink data={csvData}>DOWNLOAD YOUR DATA</CSVLink>
                                        </Card.Body>
                                    </Card>
                                </tr>
                            </table>
                            <br></br>
                            <Card>
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
                            </Card>
                            <br></br>
                        </div>
                    );
                }
            })}
        </div>

    )
}
export default PersonalInfo;