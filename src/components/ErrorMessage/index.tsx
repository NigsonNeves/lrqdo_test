import React, { FC } from 'react';

import { ErrorMessageProps } from './interface/type';

import './style/error.css';

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className="error-message">
      <p>{error}</p>
    </div>
  );
}

export default ErrorMessage;
