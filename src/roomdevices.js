import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import DeviceCard from './components/DeviceCard';
import Footer from './components/footer';
import RightSidebar from './components/right-sidebar';
import AddDevice from './components/AddDeviceModal'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class Devices extends Component {

  constructor() {
    super();
    this.state = {
      device: [],
      selectedHouse: null,
      checked: false,
      credentials: {
        device_code: '',
        device_name: '',
        mac_address: '',
        energy_used: '',
        state: false,
        room: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://oko-api.herokuapp.com/dwelling/device/', {
      method: 'GET',
      headers: {
        //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
      }
    }).then(resp => resp.json())
      .then(resp => this.setState({ device: resp }))
      .catch(error => console.log(error))
  }

  deviceClicked = d => {
    console.log(d)
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  handleButtonClick = () => {
    this.setState({
      divColor: "#FBF9B7"
    })
  }

  render() {
    return (

      <div class="grid" style={{ background: this.state.divColor }}>
        <header>
          <Header></Header>
        </header>

        <aside class="sidebar-left">
          <Sidebar></Sidebar>
        </aside>

        <article>
          <h1>My Devices</h1>
          <DeviceCard device={this.state.device} deviceClicked={this.d} delete={this.state.deleteDevice} handleChange={this.handleChange.bind(this)} checked={this.state.checked} />
          <AddDevice />
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
    );

  }
}

export default Devices; 
