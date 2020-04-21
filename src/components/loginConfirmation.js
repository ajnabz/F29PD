import React from 'react';

function LoginConfirmation(props) {
    return (

        <div>
            {props.userAccount.map(userAccount => {
                let usernameUnchecked = userAccount.username;
                let passwordUnchecked = userAccount.password;

                if(props.username === usernameUnchecked){
                    if(props.password === passwordUnchecked){
                        let usernameChecked = props.username;
                        let passwordChecked = props.password;

                        return(
                            <div>
                                <div name="usernameMap" value={usernameChecked} onLoad={props.inputChanged}></div>
                                <div name="passwordMap" value={passwordChecked} onLoad={props.inputChanged}></div>
                            </div>
                        );
                    } 
                }
            })}
        </div>
    );
}

export default LoginConfirmation;