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
                <a target="_blank" href="https://twitter.com/intent/tweet?button_hashtag=Okosmart&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #Oko</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </MDBBtn>
              </MDBBtnGroup>
            </tr>
            <tr className='text-center' header='Outline'>
              <MDBBtnGroup size='lg' className="sidebarButtons">
                <MDBBtn outline color='default'>
                  Hi
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



