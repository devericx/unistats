import React from 'react';

const Email = props => (
  <form
    action="https://mnjn.us16.list-manage.com/subscribe/post?u=73f51387db73057e2d43cc0fa&amp;id=31455b5919"
    method="post"
    className={`emailBox ${props.className}`}
  >
    <input className="email" type="email" name="EMAIL" placeholder="email@example.com" />
    <input className="emailButton" type="submit" value="Submit" name="subscribe" />
    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
      <input type="text" name="b_73f51387db73057e2d43cc0fa_31455b5919" tabIndex="-1" value="" />
    </div>
  </form>
);

export default Email;
