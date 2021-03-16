import React from 'react';
import logo from './BSLogo.png';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import '@aws-amplify/ui/dist/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>beautysafety.net</code>
        </p>
      </header>
    </div>
  );
}

export default withAuthenticator(App, {includeGreetings: true});
