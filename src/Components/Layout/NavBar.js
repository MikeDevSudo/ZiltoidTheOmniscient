import React from 'react';
import classes from "./NavBar.module.css";

const NavBar = () => {

 
  return (
    <>
      <header className={classes.NavBar}>
        <div className={classes.NavBarTitle}>
          <h1>Ziltoid The Omniscient</h1>
        </div>
      </header>
    </>
  );
};

export default NavBar;
