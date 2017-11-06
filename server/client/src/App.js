import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import logo from './logo.svg';
import './App.css';
import GoogleLoginButton from './GoogleLoginButton'
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title="SkinDoc"
            iconElementRight={<GoogleLoginButton />}
          />
          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
