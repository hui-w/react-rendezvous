import React, {Component} from 'react';
import LinkButton from '../components/LinkButton';
import '../styles/user-form.css';

export default class UserFormV2 extends Component {
	constructor(props, context) {
		super(props, context);
		this.save = this.save.bind(this);

		let user = props.user;
		this.state = {
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email
		};
	}

	componentWillReceiveProps(nextProps) {
		let user = nextProps.user;
		this.setState({
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email
		});
	}

	handleChange(key, event) {
		this.setState({
			[key]: event.target.value
		});
	}

	save() {
		let user= {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email
		}
		this.props.onSave(user);
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
					<input type="text" value={this.state.firstName} 
						onChange={this.handleChange.bind(this, "firstName")} 
						className="formField" />
				</p>
				<p>
					Last Name:
					<br />
					<input type="text" value={this.state.lastName} 
						onChange={this.handleChange.bind(this, "lastName")}  
						className="formField" />
				</p>
				<p>
					Email:
					<br />
					<input type="text" value={this.state.email} 
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
