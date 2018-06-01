import React from 'react';

const Layout = props => (
  <div>
    <div className="container">
      <div className="row">
        <h1>Create a To Do list</h1>
        { props.children }
      </div>
    </div>
  </div>
)
export default Layout;
