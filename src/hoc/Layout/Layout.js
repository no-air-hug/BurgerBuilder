import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state={
        showSideDrawer: false,
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false});
    }
    sideDrawerOpenHandler = () =>{
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render(){
        return(
            <Auxiliary>
                <Toolbar sideDrawerToggled ={this.sideDrawerOpenHandler}/>
                <SideDrawer
                open ={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler}/>
                {/* Allows layout to use layout comnponent as a wrapper around the core content component i want to render on the screen  */}
                <main className ={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
};
export default Layout;