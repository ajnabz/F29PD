import React from 'react';
import avatar from '../images/img_avatar2.png';

function SidebarInfo(props) {

    return (

        <div>
            {props.userAccount.map(userAccount => {

                const username = userAccount.username;
                const accType = userAccount.admin_type;
                const code = userAccount.dwelling_code;

                if (code === "ABC-XYZ") {

                    return (

                        <React.Fragment>
                            <img src={avatar} alt="Avatar" className="avatar" />
                            <p className="sidebar-name" key={userAccount.username}>{username}</p>
                            <p className="sidebar-name" key={userAccount.admin_type}>{accType}</p>
                        </React.Fragment>
                    )

                }
            })}
        </div>

    )
}
export default SidebarInfo;