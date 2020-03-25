import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import MovieList from './components/movie-list'
import RightSidebar from './components/right-sidebar';


class Rooms extends Component {

  state = {
    room: [],
    selectedMovie: null
  }

  componentDidMount() {
    fetch('https://oko-api.herokuapp.com/dwelling/room/', {
      method: 'GET',
      headers: {
        //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
      }
    }).then(resp => resp.json())
      .then(resp => this.setState({room: resp}))
      .catch(error => console.log(error))
  }

  movieClicked = movie => {
    console.log(movie)
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
            <MovieList room={this.state.room} movieClicked={this.room}/>
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