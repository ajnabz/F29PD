import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import SidebarInfo from './sidebarInfo';

class Sidebar extends Component {

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
      .then(resp => this.setState({house: resp}))
      .catch(error => console.log(error))
  }

  houseClicked = h => {
    console.log(h)
  }

  render(){
    return (
      <React.Fragment>

      <div className="sidenav">
        <SidebarInfo house={this.state.house} houseClicked={this.h}></SidebarInfo>
        <hr></hr>
        <DropdownButton id="dropdown-basic-button" title="Menu" className="sidebarDropDown">
          <Dropdown.Item href="/Oko">My Home</Dropdown.Item>
          <Dropdown.Item href="/Oko/Devices">My Devices</Dropdown.Item>
          <Dropdown.Item href="/Oko/Rooms">My Rooms</Dropdown.Item>
          <Dropdown.Item href="/Oko/Settings">Settings</Dropdown.Item>
          <Dropdown.Item href="/Oko">Sign Out</Dropdown.Item>

        </DropdownButton>
        <a className="sidenav-text" href="/Oko">Homepage</a>
        <a className="sidenav-text" href="/Oko/Devices">My Devices</a>
        <a className="sidenav-text" href="/Oko/Rooms">My Rooms</a>
        <a className="sidenav-text" href= "/Oko/Settings">Settings</a>
        <a className="sidenav-text" href="/">Log Out</a>
      </div>

     </React.Fragment>
    );
  }
}

export default Sidebar;
