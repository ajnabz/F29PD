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
        userAccount: [],
        selectedHouse: null
    }

    componentDidMount() {
        fetch('http://oko-api.herokuapp.com/account/users/', {
            method: 'GET',
            headers: {
                //'Authorization': 'Token 53aaf969d1e6ee660f11a9cb99da97338232d86e'
            }
        }).then(resp => resp.json())
            .then(resp => this.setState({ userAccount: resp }))
            .catch(error => console.log(error))
    }


    userAccountClicked = a => {
        console.log(a)
    }

    changePrivileges(event) {
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

        return (
            <div>
                {this.state.userAccount.map(userAccount => {

                    const dwelling_code = userAccount.dwelling_code;
                    const username = userAccount.username;
                    let logged_in = userAccount.logged_in;

                    function users(){
                            if(logged_in === true || logged_in === false){
                                return(
                                    <div>{username}</div>
                                );
                            }
                    }

                    if (logged_in === true) {
                        if (this.state.isAdminView === true) {
                            return (
                                <React.Fragment>
                                    <h3>Admin Privileges</h3>
                                    <HouseMembers userAccount={this.state.userAccount} userAccountClicked={this.a}></HouseMembers>
                                    <p style={{ color: 'red' }}>Have to insert things about the users</p>
                                </React.Fragment>
                            );
                        }

                        else if (this.state.isNonAdminView === true) {
                            return (
                                <React.Fragment>
                                    <h3>Non-Admin Privileges</h3>
                                    <HouseMembers userAccount={this.state.userAccount} userAccountClicked={this.a}></HouseMembers>
                                </React.Fragment>
                            );
                        }

                        else if (this.state.isSuperAdminView === true) {
                            return (
                                <React.Fragment>
                                    <h3>Super-Admin Privileges</h3>
                                    <HouseMembers userAccount={this.state.userAccount} userAccountClicked={this.a}></HouseMembers>
                                    <br></br>
                                    <p className="boldTitle">Change Admin Privileges</p>

                                    <div>{users()}</div>
                                    <table>
                                        <tr style={{ width: '100%' }}>
                                            <td style={{ width: '30%' }}>
                                                <button onClick={this.changePrivileges()} className="dwellCode_button">Make Super-Admin</button>
                                            </td>
                                            <td style={{ width: '30%' }}>
                                                <button onClick={this.changePrivileges()} className="dwellCode_button">Make Admin</button>
                                            </td>
                                            <td style={{ width: '30%' }}>
                                                <button onClick={this.changePrivileges()} className="dwellCode_button">Make Non-Admin</button>
                                            </td>
                                        </tr>
                                    </table>

                                </React.Fragment>
                            );
                        }
                    }
                })}
            </div>
        );

    }
}

export default AdminPriv;



