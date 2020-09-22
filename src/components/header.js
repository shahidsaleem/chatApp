import React from 'react';

export const Header = (props) => {
  return (
    <div className="headerWraper">
      <div onClick={props.logout} className="button">
        Logout
      </div>{' '}
    </div>
  );
};
