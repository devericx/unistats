import React from 'react';

const Stat = props => (
  <div className="stat">
    <h3 className="f4 grey mb-small">{props.header}</h3>
    <p className="f4">{props.body}</p>
  </div>
);

export default Stat;
