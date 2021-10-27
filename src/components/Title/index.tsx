import React, { FC } from 'react';
import { TitleProps } from './interface/type';

import './style/title.css';

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div className="title-wrapper">
      <div className="header">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Title;
