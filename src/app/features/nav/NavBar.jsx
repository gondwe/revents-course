import React, { Component } from 'react'
import { Container,Menu,Button } from "semantic-ui-react";
import { NavLink,Link, withRouter } from "react-router-dom";
import SignedOut from './menus/SignedOut';
import SignedIn from './menus/SignedIn';

class NavBar extends Component {
  
  state = {
    auth:false
  }

  authenticate = (status) => () =>{
    this.setState({
      auth:status
    })
    if(!status) {this.props.history.push('/')}
  }
  
  render() {
    const {auth} = this.state;
    return (
      <div>
              <Menu inverted fixed="top">
                <Container>
                  <Menu.Item header as={Link} to="/">
                    <img src="/assets/logo.png" alt="logo" />
                    Re-vents
                  </Menu.Item>
                  <Menu.Item name="Events" as={NavLink} to="/events" />
                  {auth &&
                  <Menu.Item name="Users" as={NavLink} to="/users" />
                  }
                  {auth &&
                  <Menu.Item>
                    <Button as={NavLink} to="/create" floated="right" positive inverted content="Create Event" />
                  </Menu.Item>
                  }
                  {auth ? <SignedIn auth={this.authenticate}/> : <SignedOut auth={this.authenticate}/> }
                  
                  
                </Container>
              </Menu>
      </div>
    )
  }
}



export default withRouter(NavBar)