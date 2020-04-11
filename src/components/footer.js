import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {

	render() {
		return (
			<React.Fragment>

				<footer>
					<a href="https://flonne.me/okoteam" className="f_button" target='_blank'>About Us</a>
					<a href="https://flonne.me/faq" target='_blank' className="f_button">FAQs</a>
					<a href="/Oko/TermsAndConditions" target='_blank' className="f_button">T&amp;C</a>
					<a href="https://flonne.me/contact-us" className="f_button" target='_blank'>Contact Us</a>
				</footer>
			</React.Fragment>
		);
	}
}

export default Footer;



