import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {

	render() {
		return (
			<React.Fragment>

				<footer>
					<a href="https://flonne.me/okoteam" className="f_button" target='_tab'>About Us</a>
					<a href="#aboutus" className="f_button">FAQs</a>
					<a href="/Oko/TermsAndConditions" className="f_button">T&amp;C</a>
					<a href="https://flonne.me/" className="f_button" target='_tab'>Contact Us</a>
				</footer>
			</React.Fragment>
		);
	}
}

export default Footer;



