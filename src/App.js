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
    device: [],
    userAccount: [],
    divColor: "white",
    buttonColor: "purple"
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

    fetch('https://oko-api.herokuapp.com/account/users/', {
      method: 'GET',
      headers: {
        //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
      }
    }).then(resp => resp.json())
      .then(resp => this.setState({ userAccount: resp }))
      .catch(error => console.log(error))
  }

  deviceClicked = d => {
    console.log(d)
  }


  userAccountClicked = a => {
    console.log(a)
  }

  handleButtonClick = () => {
    this.setState({
      divColor: "#FBF9B7"
    })
  }


  render() {
    return (
        <div style={{ background: this.state.divColor }}>

          <div className="grid">
            <header>
              <Header></Header>
            </header>

            <aside className="sidebar-left">
              <Sidebar></Sidebar>
            </aside>

            <article>
              <Progressbar userAccount={this.state.userAccount} userAccountClicked={this.a}></Progressbar>
              <ChartsPage device={this.state.device} deviceClicked={this.d}></ChartsPage>
              <br></br>
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
        </div>
    );
  }
}

export default App;



