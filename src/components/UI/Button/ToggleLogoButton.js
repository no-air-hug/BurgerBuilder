import React from 'react';
import classes from './ToggleLogoButton.css';
// import burgerLogo from '../../../assets/Images/burger-logo.png';

const toggleLogoButton = (props) =>(
    <div 
        className={classes.ToggleLogoButton} onClick={props.toggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>   
);
export default toggleLogoButton;