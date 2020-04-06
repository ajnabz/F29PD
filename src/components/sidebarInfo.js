import React from 'react';
import avatar from '../images/img_avatar2.png';

function SidebarInfo(props) {

    return (

        <div>
            {props.house.map(house => {

                var username = house.dwelling_name;
                const accType = house.dwelling_superUsers;
                var code = house.dwelling_code;

                if (code === "XJE2-LHA") {

                    return (

                        <React.Fragment>
                            <img src={avatar} alt="Avatar" className="avatar" />
                            <p className="sidebar-name" key={house.dwelling_name}>{username}</p>
                            <p className="sidebar-name" key={house.dwelling_superUsers}>{accType}</p>
                        </React.Fragment>
                    )

                }
            })}
        </div>

    )
}
export default SidebarInfo;