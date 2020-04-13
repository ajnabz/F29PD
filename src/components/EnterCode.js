import React, { Component } from 'react';
import '../App.css';

function EnterCode(props) {

    return (

        <div>

            <div>
                {props.dataFromParent}
            </div>
            {props.house.map(house => {

                var test = ""
                var message = "Please enter the Correct Code"
                var showButton = true
                var code = house.dwelling_code
                if (code === props.dataFromParent) {
                    test = "/Oko/RegisterUser" 
                    message = "Success"

                } else {
                    showButton = props.show
                }
                return (

                    <div style={{ display: showButton ? "block" : "none" }}>
                       
                        <React.Fragment>
                            <div>
                                <a href='/Oko/RegisterUser'><button className="dwellCode_button" style={{margin:'0'}}>Continue</button></a>
                            </div>
                        </React.Fragment>
                    </div>

                )
            })}

        </div>
    )

}
export default EnterCode;