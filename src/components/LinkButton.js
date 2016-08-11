import React from 'react';

export default function LinkButton({children, onClick}) {
	return (
		<a href="javascript: void(0)" onClick={onClick} className="linkButton">{children}</a>
	)
}
