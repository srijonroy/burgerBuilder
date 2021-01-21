import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.isAuth ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {!props.isAuth ?
            <NavigationItem link="/auth">Sign In</NavigationItem>
            : <NavigationItem link="/logout">Sign Out</NavigationItem>}
    </ul>
);

export default navigationItems;