import React, { Component } from 'react';
import LinkButton from '../components/LinkButton';

class App extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			viewIndex: -1
		}
	}

	setViewIndex(index) {
		this.setState({
			viewIndex: index
		});
	}

	render() {
		let views = this.props.views;
		let onShowStore = this.props.onShowStore;
		return (
			<div className="app">
				<div className="header">
					<LinkButton onClick={e => this.setViewIndex(1)}>Users View</LinkButton>
					{' '}
					<div style={{float: "right"}}>
						<LinkButton onClick={e => this.setViewIndex(0)}>Misc View</LinkButton>
						{' '}
						<LinkButton onClick={onShowStore}>Show Store</LinkButton>
						{' '}
					</div>
				</div>
				<div className="main">
					{this.state.viewIndex > -1 && 
						views[this.state.viewIndex]}
				</div>
			</div>
		);
	}
}

export default App;
