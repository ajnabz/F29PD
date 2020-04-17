import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Footer from './components/footer';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import RightSidebar from './components/right-sidebar';
import { CSVLink } from "react-csv";
import PersonalInfo from './components/personalInfo';
import DwellingInfo from './components/dwellingInfo';


class Settings extends Component {

  state = {
    userAccount: [],
    selectedMovie: null,
    credentials: {
      goal: ''
    }
  }

  componentDidMount() {
    fetch('http://oko-api.herokuapp.com/account/users/?fbclid=IwAR0zRxvYYfFYwVZjkukFkWu9GF7BGUACPzgG_40Nd39VFuoegLJdVIWvDMU', {
      method: 'GET',
      headers: {
        //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
      }
    }).then(resp => resp.json())
      .then(resp => this.setState({ userAccount: resp }))
      .catch(error => console.log(error))
  }

  accountClicked = a => {
    console.log(a)
  }

  inputChanged = event => {
    let cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  }

  setGoal = event => {
    console.log(this.state.credentials);
    fetch('http://oko-api.herokuapp.com/account/users/?fbclid=IwAR0zRxvYYfFYwVZjkukFkWu9GF7BGUACPzgG_40Nd39VFuoegLJdVIWvDMU', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.credentials)
    }).then(res => {
      console.log(res.token);
      this.props.cookies.set('token', res.token);
    })
      .catch(error => console.log(error))
  }


  render() {

    return (
      <div>
        {this.state.userAccount.map(userAccount => {

          const first_name = userAccount.first_name;
          const last_name = userAccount.last_name;
          const name = `${first_name} ${last_name}`;
          const username = userAccount.username;
          const tel = userAccount.phone_number;
          const email = userAccount.email;
          const password = userAccount.password;
          const code = userAccount.dwelling_code;
          const incent_choice = userAccount.incentivisation_choice;

          const csvData = [
            [name],
            [username],
            [tel],
            [email],
            [password],
            [code],
            [incent_choice]
          ];

          function setGoal() {
            if (incent_choice === 'HE') {
              return (
                <Card.Text>
                  Set your goal for how much energy you want to save in kWh
                </Card.Text>
              );

            } else if (incent_choice === 'SM') {
              return (
                <Card.Text>
                  Set your goal for how much money you want to save in £
                </Card.Text>
              );
            }
          }

          if (code === "ABC-XYZ") {

            return (

              <div>

                <div class="grid">
                  <header>
                    <Header></Header>
                  </header>

                  <aside class="sidebar-left">
                    <Sidebar></Sidebar>
                  </aside>

                  <article>
                    <h1>Settings</h1>
                    <Card>
                      <Card.Body>
                        <Card.Title>Set Your Goal</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        <div>{setGoal()}</div>
                        <hr></hr>
                        <tr>
                          <Card.Text class="setting-devices">
                            Please enter your goal:
                        </Card.Text>
                        </tr>
                        <tr>
                          <input type="text" name="goal" value={this.state.credentials.goal} onChange={this.inputChanged} /><br />
                          <button onClick={this.setGoal} className="dwellCode_button">
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
                      <PersonalInfo house={this.state.house} houseClicked={this.h}></PersonalInfo>
                    </Card>
                    <br></br>
                    <Card>
                      <DwellingInfo house={this.state.house} houseClicked={this.h}></DwellingInfo>
                    </Card>
                  </article>

                  <aside>
                    <RightSidebar></RightSidebar>
                  </aside>

                  <footer>
                    <Footer></Footer>
                  </footer>

                </div>

              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default Settings;




