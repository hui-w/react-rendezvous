import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../components/LinkButton';
import '../styles/user-form.css';

export default class UserForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);

    const user = props.user;
    this.state = {
      user
    };
  }

  componentWillReceiveProps(nextProps) {
    const user = nextProps.user;
    this.setState({
      user
    });
  }

  handleChange(event) {
    const key = event.target.getAttribute('name');
    const newUser = JSON.parse(JSON.stringify(this.state.user));
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
          <input
            type="text" name="firstName" value={this.state.user.firstName}
            onChange={this.handleChange}
            className="formField"
          />
        </p>
        <p>
          Last Name:
          <br />
          <input
            type="text" name="lastName" value={this.state.user.lastName}
            onChange={this.handleChange}
            className="formField"
          />
        </p>
        <p>
          Email:
          <br />
          <input
            type="text" name="email" value={this.state.user.email}
            onChange={this.handleChange}
            className="formField"
          />
        </p>
        <p>
          <LinkButton onClick={this.save}>Save</LinkButton>
          {' '}
          <LinkButton onClick={onCancel}>Cancel</LinkButton>
        </p>
      </div>
    );
  }
}

UserForm.propTypes = {
  user: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func
};
