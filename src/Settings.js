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
    house: [],
    selectedMovie: null,
    credentials: {
      goal: 0,
      username: 'Connor',
      email:"connor@gmail.com"
    }
  }

  componentDidMount() {
    fetch('https://oko-api.herokuapp.com/account/users/', {
      method: 'GET',
      headers: {
        //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
      }
    }).then(resp => resp.json())
      .then(resp => this.setState({ userAccount: resp }))
      .catch(error => console.log(error))

    fetch('https://oko-api.herokuapp.com/dwelling/house/', {
      method: 'GET',
      headers: {
        //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
      }
    }).then(resp => resp.json())
      .then(resp => this.setState({ house: resp }))
      .catch(error => console.log(error))
  }

  userAccountClicked = a => {
    console.log(a)
  }

  houseClicked = h => {
    console.log(h)
  }

  inputChanged = event => {
    let cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  }

  setGoal = event => {
    console.log(this.state.credentials);
    fetch(`https://oko-api.herokuapp.com/account/users/${this.state.credentials.username}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.credentials)
    }).then(res => {
      console.log(res.token);
    })
      .catch(error => console.log(error))
  }

  handleButtonClick = () => {
    this.setState({
      divColor: "#FBF9B7"
    })
  }

  render() {
    return (

      <div style={{ background: this.state.divColor }}>

        <div class="grid">
          <header>
            <Header></Header>
          </header>

          <aside class="sidebar-left">
            <Sidebar></Sidebar>
          </aside>

          <article>
            <h1>Settings</h1>
            <PersonalInfo userAccount={this.state.userAccount} userAccountClicked={this.a} cred={this.state.credentials} inputChanged={this.inputChanged} setGoal={this.setGoal}></PersonalInfo>
            <Card>
              <DwellingInfo house={this.state.house} houseClicked={this.h}></DwellingInfo>
            </Card>
          </article>

          <aside>
            <RightSidebar></RightSidebar>
          </aside>

          <footer>
            <Footer></Footer>
            <button style={{ background: this.state.buttonColor, width: '30em', fontSize: '0.85em' }} onClick={this.handleButtonClick}>
                Change background colours for accessibility.
              </button>
          </footer>

        </div>

      </div>
    );
  }
}


export default Settings;