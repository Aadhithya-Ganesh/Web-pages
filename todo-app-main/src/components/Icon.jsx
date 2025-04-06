import classes from './icon.module.css';
import sun from './../../images/icon-sun.svg';
import moon from './../../images/icon-moon.svg';
import { useState } from 'react';

const Icon = ({icon, iconHandler}) => {
    return <>
        <img src={icon == "sun" ? sun : moon } className = {classes.icon} onClick = {iconHandler} alt="" />
    </>;
}

export default Icon;