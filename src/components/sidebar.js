import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import SidebarInfo from './sidebarInfo';
import FontSizeChanger from 'react-font-size-changer';

class Sidebar extends Component {

  state = {
    userAccount: []
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

  userAccountClicked = a => {
    console.log(a)
  }

  render() {

    return (
      <React.Fragment>

        <div className="app">

          <div id="target">

            <div className="sidenav">
              <SidebarInfo house={this.state.userAccount} userAccountClicked={this.a}></SidebarInfo>
              <hr></hr>
              <DropdownButton id="dropdown-basic-button" title="Menu" className="sidebarDropDown">
                <Dropdown.Item className="dropDownText" href="/Oko">My Home</Dropdown.Item>
                <Dropdown.Item className="dropDownText" href="/Oko/Devices">My Devices</Dropdown.Item>
                <Dropdown.Item className="dropDownText" href="/Oko/Rooms">My Rooms</Dropdown.Item>
                <Dropdown.Item className="dropDownText" href="/Oko/Settings">Settings</Dropdown.Item>
                <Dropdown.Item className="dropDownText" href="/Oko">Sign Out</Dropdown.Item>
                <br></br>
                <FontSizeChanger
                  targets={['#target .dropDownText']}
                  onChange={(element, newValue, oldValue) => {
                    console.log(element, newValue, oldValue);
                  }}
                  options={{
                    stepSize: 2,
                    range: 3
                  }}
                  customButtons={{
                    up: <span style={{ 'fontSize': '1.75em' }}>A</span>,
                    down: <span style={{ 'fontSize': '1.25em' }}>A</span>,
                    style: {
                      backgroundColor: 'grey',
                      color: 'white',
                      WebkitBoxSizing: 'border-box',
                      WebkitBorderRadius: '5px',
                      width: '40px'
                    },
                    buttonsMargin: 10
                  }}
                />
              </DropdownButton>
              <div className="sidenav-div">
                <a className="sidenav-text" href="/Oko">Homepage</a>
                <a className="sidenav-text" href="/Oko/Devices">My Devices</a>
                <a className="sidenav-text" href="/Oko/Rooms">My Rooms</a>
                <a className="sidenav-text" href="/Oko/Settings">Settings</a>
                <a className="sidenav-text" href="/">Log Out</a>
                <br></br>
                <FontSizeChanger
                  targets={['#target .sidenav-text']}
                  onChange={(element, newValue, oldValue) => {
                    console.log(element, newValue, oldValue);
                  }}
                  options={{
                    stepSize: 2,
                    range: 3
                  }}
                  customButtons={{
                    up: <span style={{ 'fontSize': '1.5em' }}>A</span>,
                    down: <span style={{ 'fontSize': '1em' }}>A</span>,
                    style: {
                      backgroundColor: 'grey',
                      color: 'white',
                      WebkitBoxSizing: 'border-box',
                      WebkitBorderRadius: '5px',
                      width: '40px'
                    },
                    buttonsMargin: 10
                  }}
                />
              </div>

            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Sidebar;
