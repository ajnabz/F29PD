import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Progressbar from './components/progressbar';
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import ChartsPage from './components/ChartsPage';
import RightSidebar from './components/right-sidebar';
//import Leaderboard from './components/leaderboard';
//import {withCookies} from 'react-cookie';


class App extends Component {
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


        <div className="grid">
          <header>
            <Header></Header>
          </header>

          <aside className="sidebar-left">
            <Sidebar></Sidebar>
          </aside>

          <article>
            <Progressbar house={this.state.house} houseClicked={this.h}></Progressbar>
            
            <ChartsPage></ChartsPage>
            <br></br>
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

export default App;



