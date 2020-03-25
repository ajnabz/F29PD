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
                <MDBBtn outline color='default'>
                  Money Saved
                </MDBBtn>
              </MDBBtnGroup>
            </tr>
            <tr className='text-center' header='Outline'>
              <MDBBtnGroup size='lg' className="sidebarButtons">
                <MDBBtn outline color='default'>
                  My Home
                </MDBBtn>
              </MDBBtnGroup>
            </tr>
            <tr className='text-center' header='Outline'>
              <MDBBtnGroup size='lg' className="sidebarButtons">
                <MDBBtn outline color='default'>
                  My Score
                </MDBBtn>
              </MDBBtnGroup>
            </tr>
            <tr className='text-center' header='Outline'>
              <MDBBtnGroup size='lg' className="sidebarButtons">
                <MDBBtn outline color='default'>
                  My Rank
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



