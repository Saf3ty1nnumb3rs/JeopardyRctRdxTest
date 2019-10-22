import React from 'react';

const AppRoute = (props) => {
  console.log(props);
  return (
    <>
      {props.location && props.location.pathname.includes(props.path) &&
        <div>
          {props.children}
        </div>
      }
    </>
  );
};

export default AppRoute;