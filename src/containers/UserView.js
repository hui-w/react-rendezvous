import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserForm from '../containers/UserForm';
import LinkButton from '../components/LinkButton';
import UserInfo from '../components/UserInfo';
import {loadUsers, deleteUser, createUser, updateUser} from '../actions/user';

class UserView extends Component {
	constructor(props, context) {
		super(props, context);
		this.onAdd = this.onAdd.bind(this);
		this.onSave = this.onSave.bind(this);

		this.state = {
			editingIndex: -1
		};
	}

	componentDidMount() {
		this.props.dispatch(loadUsers());
	}

	hideForm() {
		this.setState({
			"editingIndex": -1
		});
	}

	onAdd() {
		this.setState({
			"editingIndex": this.props.users.length + 1
		});
	}

	onEdit(index) {
		this.setState({
			"editingIndex": index
		});
	}

	onDelete(index) {
		this.props.dispatch(deleteUser(index));

		this.hideForm();
	}

	onSave(user) {
		let users = this.props.users;
		let editingIndex = this.state.editingIndex;
		if (editingIndex > users.length) {
			//add user
			this.props.dispatch(createUser(user));
		} else if (editingIndex > -1) {
			//edit user
			this.props.dispatch(updateUser(editingIndex, user));
		}

		this.hideForm();
	}

	render() {
		let users = this.props.users;
		let editingIndex = this.state.editingIndex;
		let addLink = (
			<div style={{padding: "10px 0px"}}>
				<LinkButton onClick={this.onAdd}> + Add User</LinkButton>
			</div>
		);
		let user;
		if (editingIndex > users.length) {
			//add user
			user = {
				firstName: "",
				lastName: "",
				email: ""
			};
		} else if (editingIndex > -1) {
			//edit user
			user = users[editingIndex];
		}

		return (
			<div>
				{users.map((user, index) => 
					<UserInfo key={index} user={user} onEdit={() => this.onEdit(index)} onDelete={() => this.onDelete(index)} />
				)}
				
				{addLink}

				{user && <UserForm user={user} 
					onSave={this.onSave} 
					onCancel={() => this.hideForm()} />
				}
			</div>
		);
	}
};

let mapStateToProps = (state) => {
	return {
		users: state.user.list
	}
};

export default connect(
	mapStateToProps
)(UserView);
