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
      house: [],
      selectedHouse: null,
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(checked) {
    this.setState({ checked });
  }


  render() {
    return (

      <div>
        {this.state.house.map(house => {
          const code = house.dwelling_code;
          const state = house.room[0].devices[0].state;

          return (

            <div class="grid">
              <header>
                <Header></Header>
              </header>

              <aside class="sidebar-left">
                <Sidebar></Sidebar>
              </aside>

              <article>
                <h1>My Devices</h1>
                <DeviceCard house={this.state.house} handleChange={this.handleChange.bind(this)} checked={this.state.checked} />
                <AddDevice></AddDevice>
              </article>


              <aside>
                <RightSidebar></RightSidebar>
              </aside>

              <footer>
                <Footer></Footer>
              </footer>
            </div>
          );
        })}

      </div>
    );
  }
}

export default Devices; 
