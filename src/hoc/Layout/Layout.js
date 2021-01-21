import React, { useState } from 'react';
import Aux from '../Auxillary/Auxillary';

import { connect } from 'react-redux';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {

    const [showSideDrawer, sideDrawerVisibilityHandler] = useState(false);

    const sideDrawerClosedHandler = () => {
        sideDrawerVisibilityHandler(false);
    }

    const sideDrawerToggleHandler = () => {
        sideDrawerVisibilityHandler(!showSideDrawer);
    }


    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler}
            />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={showSideDrawer}
                closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);