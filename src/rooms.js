import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import RoomCard from './components/roomCard';
import RightSidebar from './components/right-sidebar';


class Rooms extends Component {

  state = {
    room: [],
    suggestion: [],
    selectedRoom: null
  }

  componentDidMount() {
    {
    fetch('https://oko-api.herokuapp.com/dwelling/room/', {
      method: 'GET',
      headers: {
        //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
      }
    }).then(resp => resp.json())
      .then(resp => this.setState({room: resp}))
      .catch(error => console.log(error))
  }
  {
    fetch("https://oko-api.herokuapp.com/dwelling/suggestion/", {
      method: 'GET',
      headers: {
        //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
      }
    }).then(resp => resp.json())
      .then(resp => this.setState({suggestion: resp}))
      .catch(error => console.log(error))
  }
  }

  roomClicked = room => {
    console.log(room)
  }

  suggestionClicked = suggestion => {
    console.log(suggestion)
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
            <h1>My Rooms</h1>
            <RoomCard room={this.state.room} roomClicked={this.room} suggestion={this.state.suggestion} suggestionClicked={this.suggestion}/>
          </article>
          <aside class="sidebar-right">
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

export default Rooms;