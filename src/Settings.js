import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Footer from './components/footer';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import RightSidebar from './components/right-sidebar';
import { CSVLink } from "react-csv";
import Popup from "./components/Popup";

const name = ["Gemma Collins"];
const username = ["gCol"];
const DOB = ["02/04/1999"];
const address = ["123 Fake street"];
const tel = ["075166284064"];
const email = ["gemmaC@gmail.com"];
const password = ["123Gemma30"];

const csvData = [
  [name],
  [username],
  [DOB],
  [address],
  [tel],
  [email],
  [password]
];



class Settings extends Component {

  render() {
    return (
      <React.Fragment>



        <div class="grid">
          <header>
            <Header></Header>
          </header>

          <aside class="sidebar-left">
            <Sidebar></Sidebar>
          </aside>

          <article>

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
                <Card.Link href="/Oko/Devices" style={{ color: 'grey' }}>CHANGE YOUR ACCOUNT TYPE</Card.Link>
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
            <table>
              <tr>
              <Card className="personalInfoBox">
                  <Card.Body>
                    <Card.Title>Personal information</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Information stored on you which can be edited or delete at any time.</Card.Subtitle>
                    <br></br>
                    <Card.Text>
                      <span style={{fontWeight: "bold", paddingRight:"2em"}}>Name:</span> {name}
                    </Card.Text>
                    <hr></hr>
                    <Card.Text>
                      <span style={{fontWeight: "bold", paddingRight:"2em"}}>Username:</span> {username}
                    </Card.Text>
                    <hr></hr>
                    <Card.Text>
                      <span style={{fontWeight: "bold", paddingRight:"2em"}}>Password:</span> {password}
                    </Card.Text>
                    <hr></hr>
                    <Card.Text>
                      <span style={{fontWeight: "bold", paddingRight:"2em"}}>Date Of Birth:</span> {DOB}
                    </Card.Text>
                    <hr></hr>
                    <Card.Text>
                      <span style={{fontWeight: "bold", paddingRight:"2em"}}>Address:</span> {address}
                    </Card.Text>
                    <hr></hr>
                    <Card.Text>
                      <span style={{fontWeight: "bold", paddingRight:"2em"}}>Phone Number:</span> {tel}
                    </Card.Text>
                    <hr></hr>
                    <Card.Text>
                      <span style={{fontWeight: "bold", paddingRight:"2em"}}>Email Address:</span> {email}
                    </Card.Text>
                    <hr></hr>
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

          </article>



          <aside>
            <RightSidebar></RightSidebar>
          </aside>

          <footer>
            <Footer></Footer>
          </footer>

        </div>




      </React.Fragment>
    );
  }
}

export default Settings;



