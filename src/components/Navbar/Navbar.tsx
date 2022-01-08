import React from 'react';
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav__item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={classes.nav__item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={classes.nav__item}>
                <a href="#s">News</a>
            </div>
            <div className={classes.nav__item}>
                <a href="#s">Music</a>
            </div>
            <div className={classes.nav__item}>
                <a href="#s">Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;