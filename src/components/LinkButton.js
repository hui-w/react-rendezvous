import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function LinkButton({ children, onClick }) {
  return (
    <span onClick={onClick} className="linkButton">{children}</span>
  );
}

LinkButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func
};
