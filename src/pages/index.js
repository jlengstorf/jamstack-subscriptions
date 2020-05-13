import React, { useState } from 'react';
import {
  IdentityModal,
  useIdentityContext,
} from 'react-netlify-identity-widget';
import 'react-netlify-identity-widget/styles.css';
import '@reach/tabs/styles.css';

const Index = () => {
  const identity = useIdentityContext();
  const [dialog, setDialog] = useState(false);

  return (
    <>
      {identity && identity.isLoggedIn && (
        <pre>{JSON.stringify(identity, null, 2)}</pre>
      )}
      <h1>Sign Up for Premium Corgi Content</h1>
      <p>
        Get your subscription today to access the goodest corgos on the
        internet.
      </p>
      {!dialog && <button onClick={() => setDialog(true)}>Log In</button>}
      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={(user) => console.log('hello ', user?.user_metadata)}
        onSignup={(user) => console.log('welcome ', user?.user_metadata)}
        onLogout={() => console.log('bye ')}
      />
    </>
  );
};

export default Index;
