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
import PersonalInfo from './components/personalInfo';
import DwellingInfo from './components/dwellingInfo';
import UserInput from './components/userInput';
import RegisterDwelling from './components/RegisterDwelling';

const csvData = [
  [DwellingInfo.hName],
  [DwellingInfo.dCode],
  [DwellingInfo.dMembers],
  [DwellingInfo.sUser]
];


class Settings extends Component {

  state = {
    house: [],
    selectedMovie: null
  }
  

  componentDidMount() {
    fetch('https://oko-api.herokuapp.com/dwelling/house/', {
      method: 'GET',
      headers: {
        //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
      }
    }).then(resp => resp.json())
      .then(resp => this.setState({ house: resp }))
      .catch(error => console.log(error))
  }

  houseClicked = h => {
    console.log(h)
  }


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
            <h1>Settings</h1>
            <Card>
              <Card.Body>
                <Card.Title>Set Your Goal</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  Set your goal for how much energy you want to save
                </Card.Text>
                <hr></hr>
                <tr>
                  <Card.Text class="setting-devices">
                    Please enter your goal:
                  </Card.Text>
                </tr>
                <tr>
                  <UserInput></UserInput>
                </tr>
              </Card.Body>
            </Card>
            <br></br>

            <Card>
              <Card.Body>
                <Card.Title>Register Dwelling</Card.Title>
                <Card.Text className='mb-2 text-muted'>Add a house to your account</Card.Text>
                <hr></hr>
                <Card.Link href="/Oko/Register">REGISTER</Card.Link>
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




      </React.Fragment>
    );
  }
}

export default Settings;




