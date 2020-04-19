import React from 'react';

function HouseMembers(props) {

    return (

        <div>
            {props.userAccount.map(userAccount => {

                const members = userAccount.dwelling_members;
                const superUser = userAccount.dwelling_superUsers;
                const code = userAccount.dwelling_code;
                let logged_in = userAccount.logged_in;

                if (code === "ABC-XYZ") {
                    if (logged_in === true) {

                        return (
                            <React.Fragment>
                                <br></br>
                                <p className='boldTitle'>Members in your Household:</p>
                                <p>{members}</p>
                                <p style={{ color: 'red' }}>***maybe include avatars if we can figure that out***</p>
                                <br></br>
                                <p className='boldTitle'>Your Household Super-User:</p>
                                <p>{superUser}</p>
                            </React.Fragment>
                        );
                    }
                }
            })}
        </div>
    );
}

export default HouseMembers;