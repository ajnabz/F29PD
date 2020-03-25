import React, {Component} from 'react';
import '../App.css';
import avatar from '../images/img_avatar2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownButton} from 'react-bootstrap';
 

class Sidebar extends Component {

  render(){
    return (
      <React.Fragment>

      <div className="sidenav">
        <img src={avatar} alt="Avatar" className="avatar"/>
        <p className="sidebar-name">Username</p>
        <p className="sidebar-name">Account Type</p>
        <hr></hr>
        <DropdownButton id="dropdown-basic-button" title="Menu" className="dropdown">
          <Dropdown.Item href="/Oko">My Home</Dropdown.Item>
          <Dropdown.Item href="/Oko/Devices">My Devices</Dropdown.Item>
          <Dropdown.Item href="/Oko/Rooms">My Rooms</Dropdown.Item>
          <Dropdown.Item href="/Oko/Settings">Settings</Dropdown.Item>
          <Dropdown.Item href="/Oko">Sign Out</Dropdown.Item>

        </DropdownButton>
        <a className="sidenav-text" href="/Oko">My Home</a>
        <a className="sidenav-text" href="/Oko/Devices">My Devices</a>
        <a className="sidenav-text" href="/Oko/Rooms">My Rooms</a>
        <a className="sidenav-text" href= "/Oko/Settings">Settings</a>
        <a className="sidenav-text" href="/">Sign Out</a>
      </div>

     </React.Fragment>
    );
  }
}

export default Sidebar;
