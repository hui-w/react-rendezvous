export const USERS_LOAD = 'USERS_LOAD';
export const USERS_CREATE = 'USERS_CREATE';
export const USERS_UPDATE = 'USERS_UPDATE';
export const USERS_DELETE = 'USERS_DELETE';

export function loadUsers() {
	let users = [{
		firstName: "Linda",
		lastName: "Taylor",
		email: "linda@domain.com"
	}, {
		firstName: "Fred",
		lastName: "Smith",
		email: "fred@domain.com"
	}, {
		firstName: "Judy",
		lastName: "White",
		email: "judy@domain.com"
	}, {
		firstName: "Bob",
		lastName: "Johnson",
		email: "bob@domain.com"
	}];

	return {
		type: USERS_LOAD,
		users
	}
}

export function deleteUser(index) {
	return {
		type: USERS_DELETE,
		index
	}	
}

export function createUser(user) {
	return {
		type: USERS_CREATE,
		user
	}	
}

export function updateUser(index, user) {
	return {
		type: USERS_UPDATE,
		index,
		user
	}	
}