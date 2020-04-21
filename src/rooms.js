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
import AddRoom from './components/AddRoomModal';




class Rooms extends Component {
  state = {
    rooms: [],
    selectedRoom: null,
    houseId: 4,
  };

  componentDidMount() {
    fetch(
      `https://oko-api.herokuapp.com/dwelling/house/${this.state.houseId}/`,
      {
        method: "GET",
        headers: {
          //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
        },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => this.setState({ rooms: resp.room }))
      .catch((error) => console.log(error));
  }

  roomClicked = (room) => {
    console.log(room);
  };

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
            <div>
              {this.state.rooms.map((r) => (
                <RoomCard room={r} />
              ))}
            </div>
            <AddRoom room={this.state.room} roomClicked={this.room}></AddRoom>
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
