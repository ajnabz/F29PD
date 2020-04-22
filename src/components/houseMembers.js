import React from 'react';

function HouseMembers(props) {

    return (

        <div>
            {props.userAccount.map(userAccount => {

                const membersDynamic = userAccount.dwelling_members;
                const membersStatic = ["Connor, Neve, Abbie"];
                const superUser = userAccount.dwelling_superUsers;
                const superUserStatic = ["John"];
                const code = userAccount.dwelling_code;
                let logged_in = userAccount.logged_in;

                if (code === "ABC-XYZ") {
                    if (logged_in === true) {

                        return (
                            <React.Fragment>
                                <br></br>
                                <p className='boldTitle'>Members in your Household:</p>
                                <h5>{membersStatic}</h5>
                                <br></br>
                                <p className='boldTitle'>Your Household Super-User:</p>
                                <h5>{superUserStatic}</h5>
                            </React.Fragment>
                        );
                    }
                }
            })}
        </div>
    );
}

export default HouseMembers;