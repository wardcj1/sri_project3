import React, { Component } from 'react';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.submitStart = this.submitStart.bind(this);
	}


	submitStart () {
		console.log("Submit Button Clicked");
		this.props.history.push('/InvSpectrum/InvSpectrum');
	}

	render() {
		return(
			<div>
				<h1>Home</h1>	
				<button onClick={this.submitStart}>Start</button>
			</div>
	);
  }
}

export default Home;