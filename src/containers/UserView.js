import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import UserForm from '../containers/UserForm';
import LinkButton from '../components/LinkButton';
import UserInfo from '../components/UserInfo';
import { loadUsers, deleteUser, createUser, updateUser } from '../actions/user';

class UserView extends Component {
  constructor(props, context) {
    super(props, context);
    this.onAdd = this.onAdd.bind(this);
    this.onSave = this.onSave.bind(this);

    this.getEditingIndex(props);
  }

  componentDidMount() {
    this.props.dispatch(loadUsers());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.index !== this.props.params.index) {
      this.getEditingIndex(nextProps);
    }
  }

  onAdd() {
    hashHistory.push(`/users/${this.props.users.length + 1}`);
  }

  onEdit(index) {
    hashHistory.push(`/users/${index}`);
  }

  onDelete(index) {
    this.props.dispatch(deleteUser(index));

    this.hideForm();
  }

  onSave(user) {
    const users = this.props.users;
    const editingIndex = this.state.editingIndex;
    if (editingIndex > users.length) {
      // add user
      this.props.dispatch(createUser(user));
    } else if (editingIndex > -1) {
      // edit user
      this.props.dispatch(updateUser(editingIndex, user));
    }

    this.hideForm();
  }

  getEditingIndex(props) {
    let editingIndex = props.params.index;
    if (!editingIndex) {
      editingIndex = -1;
    }
    this.state = {
      editingIndex
    };
  }

  hideForm() {
    hashHistory.push('/users');
  }

  render() {
    const users = this.props.users;
    const editingIndex = this.state.editingIndex;
    let addLink = (
      <div style={{ padding: '10px 0px' }}>
        <LinkButton onClick={this.onAdd}> + Add User</LinkButton>
      </div>
    );
    let editingUser;
    if (editingIndex > users.length) {
      // add user
      editingUser = {
        firstName: '',
        lastName: '',
        email: ''
      };
    } else if (editingIndex > -1) {
      // edit user
      editingUser = users[editingIndex];
    }

    return (
      <div>
        {users.map((user, index) =>
          <UserInfo key={index} user={user} onEdit={() => this.onEdit(index)} onDelete={() => this.onDelete(index)} />
        )}

        {addLink}

        {editingUser &&
          <UserForm
            user={editingUser}
            onSave={this.onSave}
            onCancel={() => this.hideForm()}
          />
        }
      </div>
    );
  }
}

UserView.propTypes = {
  users: PropTypes.array,
  params: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = (state) => ({
  users: state.user.list
});

export default connect(
  mapStateToProps
)(UserView);
