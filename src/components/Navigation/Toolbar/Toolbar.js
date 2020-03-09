import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleLogoButton from '../../UI/Button/ToggleLogoButton'

const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <ToggleLogoButton toggle={props.sideDrawerToggled}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;