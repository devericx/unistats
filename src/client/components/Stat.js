import React from 'react';

const Stat = props => (
  <div className="stat">
    <h3 className="f-small grey mb-small">{props.header}</h3>
    <p className="f-small">{props.body}</p>
  </div>
);

export default Stat;
