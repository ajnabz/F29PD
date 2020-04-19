import React from 'react';
import avatar from '../images/img_avatar2.png';

function SidebarInfo(props) {
    return (

        <div>
            {props.userAccount.map(userAccount => {

                const username = userAccount.username;
                const accType = userAccount.admin_type;
                const code = userAccount.dwelling_code;
                let logged_in = userAccount.logged_in;

                function accountType() {
                    if (accType === "SA") {
                        return (
                            <div>Super-Admin</div>
                        );
                    } else if (accType === "A") {
                        return (
                            <div>Admin</div>
                        );
                    } else if (accType === "NA") {
                        return (
                            <div>Non-Admin</div>
                        );
                    }
                }

                if (code === "ABC-XYZ") {
                    if (logged_in === true) {

                        return (
                            <React.Fragment>
                                <img src={avatar} alt="Avatar" className="avatar" />
                                <p className="sidebar-name" key={userAccount.username}>{username}</p>
                                <p className="sidebar-name" key={userAccount.admin_type}>{accountType()}</p>
                            </React.Fragment>
                        );
                    }
                }
            })}
        </div>

    );
}
export default SidebarInfo;