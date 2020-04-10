import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn, MDBBtnGroup } from 'mdbreact';

class RightSidebar extends Component {

  render() {
    return (
      <React.Fragment>
        <table className="sidebar-right">
          <tbody>
            <tr className='text-center' header='Outline'>
              <MDBBtnGroup size='lg' className="sidebarButtons">
                <MDBBtn>
                  <span style={{ color: '#030C49' }}>Money Saved</span>
                </MDBBtn>
              </MDBBtnGroup>
            </tr>
            <tr className='text-center' header='Outline'>
              <a target="_blank" href="https://twitter.com/intent/tweet?button_hashtag=Okosmart&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">
                <MDBBtnGroup size='lg' className="sidebarButtons">
                  <MDBBtn>
                    <span style={{ color: '#030C49' }}>Tweet #Oko</span>
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                  </MDBBtn>
                </MDBBtnGroup>
              </a>
            </tr>
            <tr className='text-center' header='Outline'>
              <MDBBtnGroup size='lg' className="sidebarButtons">
                <MDBBtn>
                  <span style={{ color: '#030C49' }}>Hi</span>
                </MDBBtn>
              </MDBBtnGroup>
            </tr>
            <tr className='text-center' header='Outline'>
              <MDBBtnGroup size='lg' className="sidebarButtons">
                <MDBBtn>
                  <span style={{ color: '#030C49' }}>My Rank</span>
                </MDBBtn>
              </MDBBtnGroup>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default RightSidebar;



