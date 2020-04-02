import React, { Component } from 'react';
import '../App.css';
import Header from './header';
import Sidebar from './sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Footer from './footer';
import RightSidebar from './right-sidebar';



class AdminPriv extends Component {

    state = {
        isAdminView: false,
        isSuperAdminView: false,
        isNonAdminView: true
    }


  render() {
    if(this.state.isAdminView == true){
        return(
            <p>ADMIN VIEW</p>
        );
    }

    else if(this.state.isNonAdminView == true){
        return(
            <p>NON ADMIN VIEW</p>
        );
    }

  }
}

export default AdminPriv;



