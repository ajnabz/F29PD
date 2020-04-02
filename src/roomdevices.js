import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import DeviceCard from './components/DeviceCard';
import Footer from './components/footer';
import RightSidebar from './components/right-sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class Devices extends Component {
    state = {
        device: [],
        selectedMovie: null
      }
    
      componentDidMount() {
        fetch('https://oko-api.herokuapp.com/dwelling/device/', {
          method: 'GET',
          headers: {
            //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
          }
        }).then(resp => resp.json())
          .then(resp => this.setState({device: resp}))
          .catch(error => console.log(error))
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
                        <DeviceCard device={this.state.device} />
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

export default Devices; 
