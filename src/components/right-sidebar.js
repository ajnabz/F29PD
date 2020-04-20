import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn, MDBBtnGroup } from 'mdbreact';
import ClockFunction from './clockFunction';

class RightSidebar extends Component {

  render() {
    return (
      <React.Fragment>
        <table className="sidebar-right">
          <tbody>
            <tr className='text-center' header='Outline'>
              <MDBBtnGroup size='lg' className="sidebarButtons">
                <MDBBtn>
                  <span style={{ color: '#030C49' }}><ClockFunction></ClockFunction></span>
                </MDBBtn>
              </MDBBtnGroup>
            </tr>
            <tr className='text-center' header='Outline'>
              <a href="/Oko">
                <MDBBtnGroup size='lg' className="sidebarButtons">
                  <MDBBtn color='danger'>
                    <span style={{ color: '#030C49' }}>Todays Usage</span>
                  </MDBBtn>
                </MDBBtnGroup>
              </a>
            </tr>
            <tr className='text-center' header='Outline'>
              <a href="/Oko/Rooms">
                <MDBBtnGroup size='lg' className="sidebarButtons">
                  <MDBBtn color='warning'>
                    <span style={{ color: '#030C49' }}>Money Saved</span>
                  </MDBBtn>
                </MDBBtnGroup>
              </a>
            </tr>
            <tr className='text-center' header='Outline'>
              <a href="/Oko">
                <MDBBtnGroup size='lg' className="sidebarButtons">
                  <MDBBtn color='secondary'>
                    <span style={{ color: '#030C49' }}>My Goal</span>
                  </MDBBtn>
                </MDBBtnGroup>
              </a>
            </tr>
            <tr className='text-center' header='Outline'>
              <a target="_blank" href="https://twitter.com/intent/tweet?button_hashtag=Okoenergy&ref_src=twsrc%5Etfw" className="twitter-hashtag-button" data-show-count="false">
                <MDBBtnGroup size='lg' className="sidebarButtons">
                  <MDBBtn color='info'>
                    <span style={{ color: '#030C49' }}>Tweet #Oko</span>
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                  </MDBBtn>
                </MDBBtnGroup>
              </a>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default RightSidebar;



