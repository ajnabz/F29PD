import React from 'react';

function HouseMembers(props) {

    return (

        <div>
            {props.house.map(house => {
                
                const members = house.dwelling_members;
                const superUser = house.dwelling_superUsers;
                const code = house.dwelling_code;

                if (code === "XJE2-LHA") {

                    return(
                        <React.Fragment>
                            <br></br>
                            <p className='boldTitle'>Members in your Household:</p>
                            <p>{members}</p>
                            <p style={{color: 'red'}}>***maybe include avatars if we can figure that out***</p>
                            <br></br>
                            <p className='boldTitle'>Your Household Super-User:</p>
                            <p>{superUser}</p>
                        </React.Fragment>
                    );
                }
            })}
            </div>
    );
}

export default HouseMembers;