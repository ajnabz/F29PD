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
    state = {
        house: [],
        selectedHouse: null
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
                        <h1>My Devices</h1>
                        <DeviceCard house={this.state.house} />
                    </article>


                    <aside>
                        <RightSidebar></RightSidebar>
                        <AddDevice></AddDevice>
                    </aside>

                    <footer>
                        <Footer></Footer>
                    </footer>
                </div>

            </React.Fragment>
        );
    }
}

export default Devices; 
