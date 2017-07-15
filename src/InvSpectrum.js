import React, { Component } from 'react';

class InvSpectrum extends Component {
	
	constructor(props) {
		super(props);

		this.state = {};
		this.submitQuestionaire = this.submitQuestionaire.bind(this);
	}


	submitQuestionaire () {
		console.log("Submit Button Clicked");
		this.props.history.push('/');
	}

	render() {
		return(
			<div>
				<h1>Investor Spectrum</h1>	
				<button onClick={this.submitQuestionaire}>Submit</button>
			</div>
	);
  }
}

export default InvSpectrum;