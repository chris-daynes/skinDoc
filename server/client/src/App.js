import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import logo from './logo.svg';
import AccountIcon from 'material-ui/svg-icons/action/account-box'
import './App.css';

import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const styles = {
  button: {
    margin: 12,
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="SkinDoc"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <RaisedButton
            label="Sign in with Google"
            labelPosition="before"
            style={styles.button}
            containerElement="label"
            href='/auth/google'
            icon={<AccountIcon/>}
          >
          </RaisedButton>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
