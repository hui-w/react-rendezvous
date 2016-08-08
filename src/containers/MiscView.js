import React, { Component } from 'react'
import LinkButton from '../components/LinkButton'

class MiscView extends Component {
	constructor(props, context) {
		super(props, context);

		this.testDeepClone1 = this.testDeepClone1.bind(this);
		this.testDeepClone2 = this.testDeepClone2.bind(this);

		this.state = {
			counter: 0
		};
	}

	testDeepClone1() {
		let a = { b: {c:4} , d: { e: {f:1}} }
		let g = Object.assign({},a)
		let h = JSON.parse(JSON.stringify(a));
		console.log(g.d) // { e: { f: 1 } }
		g.d.e = 32
		console.log('g.d.e set to 32.') // g.d.e set to 32.
		console.log(g) // { b: { c: 4 }, d: { e: 32 } }
		console.log(a) // { b: { c: 4 }, d: { e: 32 } }
		console.log(h) // { b: { c: 4 }, d: { e: { f: 1 } } }
		h.d.e = 54
		console.log('h.d.e set to 54.') // h.d.e set to 54.
		console.log(g) // { b: { c: 4 }, d: { e: 32 } }
		console.log(a) // { b: { c: 4 }, d: { e: 32 } }
		console.log(h) // { b: { c: 4 }, d: { e: 54 } }
	}

	testDeepClone2() {
		let a = { b: {c:4} , d: { e: {f:1}} }
		let g = {...a};
		g.d.e = 32
		console.log(a.d.e);
	}

	testSetState() {
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
		return (
			<div>
				<LinkButton onClick={this.testDeepClone1}>Test Deep Clone 1</LinkButton>
				{' '}
				<LinkButton onClick={this.testDeepClone2}>Test Deep Clone 2</LinkButton>
				{' '}
				<LinkButton onClick={() => this.testSetState()}>Test Set State</LinkButton>
			</div>
		);
	}
}

export default MiscView;