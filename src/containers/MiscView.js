import React, { Component } from 'react'
import LinkButton from '../components/LinkButton'

class MiscView extends Component {
	constructor(props, context) {
		super(props, context);

		this.testDeepClone = this.testDeepClone.bind(this);
	}

	testDeepClone() {
		let a = { b: {c:4} , d: { e: {f:1}} }
		let g = JSON.parse(JSON.stringify(a));
		g.d.e = 32
		console.log(a.d.e);
	}

	render() {
		return (
			<div>
				<LinkButton onClick={this.testDeepClone}>Test Deep Clone</LinkButton>
			</div>
		);
	}
}

export default MiscView;