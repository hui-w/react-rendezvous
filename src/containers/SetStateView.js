import React, { Component } from 'react'

class Example extends React.Component {
	constructor() {
		super();
		this.state = {
			counter: 0
		};
	}
	
	componentDidMount() {
		this.setState({counter: this.state.counter + 1});
		console.log("1st log:", this.state.counter);

		this.setState({counter: this.state.counter + 1});
		console.log("2nd log:", this.state.counter);

		setTimeout(() => {
			this.setState({counter: this.state.counter + 1});
			console.log("3rd log:", this.state.counter);

			this.setState({counter: this.state.counter + 1});
			console.log("4th log:", this.state.counter);
		}, 0);
	}

	render() {
		return null;
	}
};