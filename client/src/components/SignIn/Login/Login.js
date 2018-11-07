import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import google from "./google.png";
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Login extends React.Component{
 
  constructor (props, context) {
    super(props, context);
  }
 
  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();
    
    console.log({ googleId });
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...


  }
 
  render () {
    return (
      <div>
        
        <GoogleLogin socialId="980184978159-qbkpe5mfq10aifknrnrfruqqmdvailn5.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     fetchBasicProfile={false}
                     responseHandler={this.responseGoogle}
                   
                     icon={google}
                    >
                     <Button>
                     Login with google </Button></GoogleLogin>
        
      </div>
    );
  }
 
}
 
export default withStyles(styles)(Login);