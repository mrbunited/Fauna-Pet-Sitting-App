import React, { Component } from 'react';

//Components
import FacebookLogin from './FacebookLogin/'
import GoogleLogin from './GoogleLogin/'
import TwitterLogin from './TwitterLogin/'

//import config from '../../../config';

class Social extends Component{
    
    render(){
        return(
            <div>
                <h2>Or Login with your social media account</h2>   
                <p>
                    <FacebookLogin />
                    <GoogleLogin />
                    <TwitterLogin />
                </p>
            </div>
        )
    }
}

export default Social;