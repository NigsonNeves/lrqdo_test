import React, { FC } from 'react';

import { InputProps } from './interface/type'

import './style/input.css'

const Input: FC<InputProps> = ({...rest}) => {
  return (
      <input {...rest} />
  );
}

export default Input;
