import React from 'react';

const Email = props => (
  <form action={props.action} className={`emailBox ${props.className}`}>
    <input className="email" type="email" placeholder="email@example.com" />
    <input className="emailButton" type="submit" value="Submit" name="subscribe" />
  </form>
);

export default Email;
