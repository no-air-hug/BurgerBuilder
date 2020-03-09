import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
import {connect} from 'react-redux';

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
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    sideDrawerToggled ={this.sideDrawerOpenHandler}/>
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
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

const mapStateToProps = state =>{
    return{
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);