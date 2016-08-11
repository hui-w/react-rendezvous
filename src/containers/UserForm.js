import React, {Component} from 'react';
import LinkButton from '../components/LinkButton';
import '../styles/user-form.css';

export default class UserForm extends Component {
	constructor(props, context) {
		super(props, context);
		this.save = this.save.bind(this);

		let user = props.user;
		this.state = {
			user
		};
	}

	componentWillReceiveProps(nextProps) {
		let user = nextProps.user;
		this.setState({
			user
		});
	}

	handleChange(key, event) {
		let newUser = JSON.parse(JSON.stringify(this.state.user));
		newUser[key] = event.target.value;
		this.setState({
			user: newUser
		});
	}

	save() {
		this.props.onSave(this.state.user);
	}

	render() {
		let {
			onCancel
		} = this.props;

		return (
			<div className="user-form">
				<p>
					First Name:
					<br />
					<input type="text" value={this.state.user.firstName} 
						onChange={this.handleChange.bind(this, "firstName")} 
						className="formField" />
				</p>
				<p>
					Last Name:
					<br />
					<input type="text" value={this.state.user.lastName} 
						onChange={this.handleChange.bind(this, "lastName")}  
						className="formField" />
				</p>
				<p>
					Email:
					<br />
					<input type="text" value={this.state.user.email} 
						onChange={this.handleChange.bind(this, "email")}  
						className="formField" />
				</p>
				<p>
					<LinkButton onClick={this.save}>Save</LinkButton>
					{' '}
					<LinkButton onClick={onCancel}>Cancel</LinkButton>
				</p>
			</div>
		);
	}
};
