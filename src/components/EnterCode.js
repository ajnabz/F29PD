import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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
                    test = "/Oko/regUser" 
                    message = "Success"

                } else {
                    showButton = props.show

                }
                return (

                    <div style={{ display: showButton ? "block" : "none" }}>
                       
                        <React.Fragment>
                            <div>
                                <Button href={test} >Continue</Button>
                            </div>
                        </React.Fragment>
                    </div>

                )
            })}

        </div>
    )

}
export default EnterCode;