import React from 'react';

const Block = props => (
  <div className="block">
    <h2 className="f1">{props.header}</h2>
    {props.children}
  </div>
);

export default Block;
