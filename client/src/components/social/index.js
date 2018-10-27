import React, { Component } from 'react';

//Components
import FacebookLogin from './FacebookLogin/'
import GoogleLogin from './GoogleLogin/'
import LinkedinLogin from './LinkedinLogin/'

//import config from '../../../config';

class Social extends Component{
    
    render(){
        return(
            <div>
                <h2>Or Login with your social media account</h2>   
                <p>
                    <FacebookLogin />
                    <GoogleLogin />
                    <LinkedinLogin />
                </p>
            </div>
        )
    }
}

export default Social;