import {React, Component} from 'react';
import Card from 'react-bootstrap/Card';
import DwellingPopup from "./dwellingPopup";

class DwellingInfo extends Component{

    state = {
        house:[]
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

    render() {

        return (

            <div>
                {this.state.house.map(house => {

                    const hName = house.dwelling_name;
                    const dCode = house.dwelling_code;
                    const dMembers = house.dwelling_members;
                    const sUser = house.dwelling_superUsers;

                    if (dCode === 4) {

                        return (

                            <div>
                                <table>
                                    <tr>
                                        <Card.Body>
                                            <Card.Title>Dwelling information</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Information stored on you which can be edited or delete at any time.</Card.Subtitle>
                                            <br></br>
                                            <Card.Text>
                                                <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Dwelling Name:</span> {hName}
                                            </Card.Text>
                                            <hr></hr>
                                            <Card.Text>
                                                <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Dwelling Code:</span> {dCode}
                                            </Card.Text>
                                            <hr></hr>
                                            <Card.Text>
                                                <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Dwelling Members:</span> {dMembers}
                                            </Card.Text>
                                            <hr></hr>
                                            <Card.Text>
                                                <span style={{ fontWeight: "bold", paddingRight: "2em" }}>Super-Admin(s):</span> {sUser}
                                            </Card.Text>
                                            <hr></hr>
                                            <tr>
                                                <td>
                                                    <Card.Link href="#" style={{ color: "grey" }}>EDIT YOUR INFO</Card.Link>
                                                </td>
                                                <td>
                                                    <DwellingPopup></DwellingPopup>
                                                </td>
                                            </tr>
                                        </Card.Body>
                                    </tr>
                                </table>
                            </div>
                        );
                    }
                })}
            </div>

        );
    }
}
export default DwellingInfo;