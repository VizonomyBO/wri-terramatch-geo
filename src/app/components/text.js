import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ variant, className, children }) => {
  return <p className={`${className} ${variant}`}>{children}</p>;
};


export default Text;