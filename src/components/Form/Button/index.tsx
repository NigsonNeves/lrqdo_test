import React, { FC } from 'react';

import { ButtonProps } from './interface/type';

import './style/button.css'

const Button: FC<ButtonProps> = ({text, ...rest}) => {
  return (
    <div className="wrapper">
      <button {...rest} >{text}</button>
    </div>
  );
}

export default Button;
