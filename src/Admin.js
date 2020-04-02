import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Footer from './components/footer';
import RightSidebar from './components/right-sidebar';
import AdminPriv from './components/adminPriv';


class Admin extends Component {


  render() {


    return (

      <React.Fragment>

        <div class="grid">
          <header>
            <Header></Header>
          </header>

          <aside class="sidebar-left">
            <Sidebar></Sidebar>
          </aside>

          <article>
              <AdminPriv></AdminPriv>
           
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

export default Admin;



