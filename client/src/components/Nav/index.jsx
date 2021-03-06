// Modules
import React, { Component } from 'react';

// Material.UI
import AppBar from 'material-ui/AppBar';
import NavMenuIcon from './NavMenuIcon';

class AppNavBar extends Component {
  constructor(props, context) {
    super(props);
    this.logIn = this.props.logIn.bind(this);
    this.logOut = this.props.logOut.bind(this);
    this.clearSessions = this.clearSessions.bind(this);
  //  console.log("this.props.user", this.props.user);
  }

  clearSessions() {
    $.get("/logout", (resp, err) => {
      this.logOut();
    });
  }

  render() {
    return (
      <div className="nav">
        <AppBar
          showMenuIconButton={false}
          title="Home"
          titleStyle={{ color: '#E8AEB7', cursor: 'pointer', flex: '' }}
          onTitleTouchTap={() => { this.context.router.push('/'); }}
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '100%' }}
          iconElementRight={
            <NavMenuIcon
              id="menuicon"
              loggedIn={this.props.loggedIn}
              clearSessions={this.clearSessions}
            />
          }
        >
          <div id="menuHeader">Menu</div>
        </AppBar>
      </div>
    );
  }
}

AppNavBar.contextTypes = {
  router: React.PropTypes.object
};

AppNavBar.propTypes = {
  title: React.PropTypes.string,
  loggedIn: React.PropTypes.bool,
  user: React.PropTypes.string,
  logOut: React.PropTypes.func,
  logIn: React.PropTypes.func,
};

export default AppNavBar;
