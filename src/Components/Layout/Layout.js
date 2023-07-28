import React from 'react';
import classes from './Layout.module.css';
import NavBar from './NavBar';

const Layout = (props) => {
  return (
    <div className={classes.AppContainer}>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
      </div>
  );
};

export default Layout;
