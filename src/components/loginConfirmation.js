import React from 'react';

function LoginConfirmation(props) {
    return (

        <div>
            {props.userAccount.map(userAccount => {
                let passwordUnchecked = userAccount.password;
                let username = userAccount.username;


                if (passwordUnchecked === props.password) {

                    return (
                        <div>
                            <button onClick={props.login} className="login_button">Login</button>
                        </div>
                    );
                } else {
                    alert("Login failed, please re-enter your details");
                }
            }
            )}
        </div>
    );
}

export default LoginConfirmation;