import React, { PropTypes } from 'react';

export default function LinkButton({ children, onClick }) {
  return (
    <span onClick={onClick} className="linkButton">{children}</span>
  );
}

LinkButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func
};
