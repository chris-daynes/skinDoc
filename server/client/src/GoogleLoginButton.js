import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import AccountIcon from 'material-ui/svg-icons/action/account-box'

const styles = {
  button: {
    margin: 12,
  }
}

function GoogleLoginButton() {
  return (
    <RaisedButton
      label="Sign in with Google"
      labelPosition="before"
      style={styles.button}
      containerElement="label"
      href='/auth/google'
      icon={<AccountIcon/>}
    >
    </RaisedButton>
  )
}

export default GoogleLoginButton