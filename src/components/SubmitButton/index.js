import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

const SubmitButton = ({ title, onClick, disabled }) => {
  console.log('🚀 ~ file: index.js ~ line 6 ~ SubmitButton ~ title', title);
  return (
    <Button onClick={onClick} disabled={disabled}>
      {title}
    </Button>
  );
};

SubmitButton.prototypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default SubmitButton;
