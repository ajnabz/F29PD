import React from 'react';
import Switch from "react-switch";

function TSwitch(props) {

    const handleChange = house => evt => {
        props.handleChange(house);
    };

    return (

        <div>
            {props.house.map(house => {
                return (

                    <div>
                        {props.house.map(house => {
                            return (
                                <label>
                                    <span>Switch with default style</span>
                                    <Switch onChange={() => props.handleChange(house)} checked={this.state.checked} />
                                </label>
                            )
                        })}
                    </div>
            
                )
            })}
        </div>

    )
}

export default TSwitch;
