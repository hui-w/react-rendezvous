import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../components/LinkButton';

export default function UserInfo({ user, onEdit, onDelete }) {
  return (
    <div style={{ padding: '10px 0px' }}>
      <LinkButton onClick={onEdit}>Edit</LinkButton>
      {' '}
      <LinkButton onClick={onDelete}>Delete</LinkButton>
      {' '}
      {`${user.firstName}, ${user.lastName} (${user.email})`}
      {' '}
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};
