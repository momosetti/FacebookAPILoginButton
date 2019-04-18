import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'
class Facebook extends Component {
    state = {
        isLogin: false,
        userid: '',
        name: '',
        email: ''
    }
    componentClicked = () => console.log('Clicked!!');

    responseFacebook = (res) => {
        console.log(res)
    }
    render() {
        let fbconnect;

        if (this.state.isLogin) {
            fbconnect = null;
        } else {
            fbconnect = (
                <FacebookLogin
                    appId="2297031330510811"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            );
        }
        return (
            <div>
                {fbconnect}
            </div>
        );
    }
}
export default Facebook;