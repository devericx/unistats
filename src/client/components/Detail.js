import React from 'react';
import Block from './Block';

const Detail = props => (
  <div className="detail">
    <div className="detailIcon">{props.icon}</div>
    <Block header={props.header}>{props.children}</Block>
  </div>
);

export default Detail;
