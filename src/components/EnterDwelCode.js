import React, { Component } from 'react';
import EnterCode from './DwelCode'
import okologo from '../images/okologotext.png'
import Footer from './footer';
class DwelCode extends Component {
    state = {
        house: [],
        selectedMovie: null
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
                <a href="/Oko"><img className="logo" src={okologo} alt="logo"></img></a>
                <br></br>

              </header>
              <aside class="sidebar-left">

               
              </aside>
              <article>
               <EnterCode house={this.state.house} houseClicked={this.house}/>
              </article>
              <aside class="sidebar-right">
   
              </aside>
    
              <footer>
                <Footer></Footer>
              </footer>
            </div>
    
    
    
          </React.Fragment>
        );
      }
    }
    
    export default DwelCode;