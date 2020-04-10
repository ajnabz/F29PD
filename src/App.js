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
    selectedHouse: null,
    divColor: "white",
    buttonColor: "purple"
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

  handleButtonClick = () => {
    this.setState({
      divColor: "#FBF9B7",
      buttonColor: "blue",
      progessWeight: 'bold'
    })
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ background: this.state.divColor }}>

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
              <button style={{ background: this.state.buttonColor, width: '30em', fontSize:'0.85em'}} onClick={this.handleButtonClick}>
                Change background colours for accessibility.
            </button>
            </footer>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;



