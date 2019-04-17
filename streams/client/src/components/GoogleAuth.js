import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    // Load & init Google API lib
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({
          isSignedIn: this.auth.isSignedIn.get()
        });
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Loading...</div>;
    } else if (this.state.isSignedIn) {
      return <div>Sign Out</div>;
    } else {
      return <div>Sign In</div>;
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

export default GoogleAuth;