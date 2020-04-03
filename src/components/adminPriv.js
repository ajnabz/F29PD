import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import HouseMembers from './houseMembers';


class AdminPriv extends Component {

    state = {
        isAdminView: false,
        isSuperAdminView: true,
        isNonAdminView: false,
        house: [],
        selectedHouse: null
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

    changePrivileges (event) {
        //alert('A list was submitted: ' + this.state.formvalue);
        fetch('your post url here', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            isAdminView: this.state.isAdminView,
            isNonAdminView: this.state.isNonAdminView,
            isSuperAdminView: this.state.isSuperAdminView
          })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
      }


    render() {
        if (this.state.isAdminView === true) {
            return (
                <React.Fragment>
                    <h3>Admin Privileges</h3>
                    <HouseMembers house={this.state.house} houseClicked={this.h}></HouseMembers>
                    <p style={{color: 'red'}}>Have to insert things about the users</p>
                </React.Fragment>
                );
        }

        else if (this.state.isNonAdminView === true) {
            return (
                <React.Fragment>
                    <h3>Non-Admin Privileges</h3>
                    <HouseMembers house={this.state.house} houseClicked={this.h}></HouseMembers>
                </React.Fragment>
            );
        }

        else if (this.state.isSuperAdminView === true) {
            return (
                <React.Fragment>
                    <h3>Super-Admin Privileges</h3>
                    <HouseMembers house={this.state.house} houseClicked={this.h}></HouseMembers>
                    <br></br>
                    <p className="boldTitle">Change Admin Privileges</p>
                    <table>
                        <tr>
                            <td>
                                <p>Name 1</p>
                            </td>
                            <td>
                                <button onClick={this.changePrivileges()}>Make Super-Admin</button>
                                <button onClick={this.changePrivileges()}>Make Admin</button>
                                <button onClick={this.changePrivileges()}>Make Non-Admin</button>
                            </td>
                        </tr>
                    </table>
                </React.Fragment>
            );
        }

    }
}

export default AdminPriv;



