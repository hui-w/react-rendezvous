import React from 'react';
import LinkButton from '../components/LinkButton';

export default function UserInfo({user, onEdit, onDelete}) {
	return (
		<div style={{padding: "10px 0px"}}>
			{`${user.firstName}, ${user.lastName} (${user.email})`}
			{' '}
			<LinkButton onClick={onEdit}>Edit</LinkButton>
			{' '}
			<LinkButton onClick={onDelete}>Delete</LinkButton>
			{' '}
		</div>
	)
}
