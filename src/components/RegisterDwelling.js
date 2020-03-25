import React, { Component } from 'react';


class RegisterDwelling extends Component {
    render() {
        return (
            <React.Fragment> 
                <h3>Unique Dwelling code</h3>
                <h4><GuidGenerator/></h4>
            </React.Fragment>
        );
    }

}
function GuidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    var S2 =S4()+"-"+S4();
    console.log(S2);
    return (S2);
}

export default RegisterDwelling;
