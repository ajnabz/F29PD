import React from 'react';
import avatar from '../images/img_avatar2.png';

function SidebarInfo(props) {

    return (

        <div>
            {props.house.map(house => {

                const username = house.dwelling_name;
                const accType = house.dwelling_superUsers;

                return (

                    <React.Fragment>
                        <img src={avatar} alt="Avatar" className="avatar" />
                        <p className="sidebar-name">{username}</p>
                        <p className="sidebar-name">{accType}</p>
                    </React.Fragment>
                )
            })}
        </div>

    )
}
export default SidebarInfo;