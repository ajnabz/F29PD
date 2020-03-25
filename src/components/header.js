import React, { Component } from 'react';
import '../App.css';
import okologo from '../images/okologotext.png'

class Header extends Component {

	render() {
		return (
			<React.Fragment>

				<div className="nav_bar">
					<ul>
						<li>
							<a href="/Oko"><img className="logo" src={okologo} alt="logo"></img></a>
						</li>
						<li>
							<div className="subheader">
								A seamless and easy way for you to take control of your effect on the environment
							</div>
						</li>
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default Header;



