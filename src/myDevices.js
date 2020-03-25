import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Progressbar from './components/progressbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Devices extends Component {

  render(){
    return (
      <React.Fragment>
        <Header></Header>
        <table class="main-table">
            <td class="sidebar-column">
                <Sidebar></Sidebar>
            </td>
        </table>
      </React.Fragment>
      );
    }
  }
  
  export default Devices;
  
  
  
