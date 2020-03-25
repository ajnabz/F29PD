import React, { Component } from 'react';
import '../App.css';


class Footer extends Component {

	render() {
		return (
			<React.Fragment>

				<footer>
					<a href="https://Flonne.me" className="f_button">About Us</a>
					<a href="#aboutus" className="f_button">FAQs</a>
					<a href="#aboutus" className="f_button">Privacy</a>
					<a href="/Oko/AboutUs" className="f_button">Contact Us</a>
				</footer>
			</React.Fragment>
		);
	}
}

export default Footer;



