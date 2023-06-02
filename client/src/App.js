import React from "react";
import logo from './logo.svg';
import './App.css';
import clerkConfig from './config/clerk';
import {ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, useClerk, UserButton} from '@clerk/clerk-react'

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ClerkProvider publishableKey={clerkConfig.key}>
        <SignedIn>
          <Welcome />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ClerkProvider>
    </div>
  );
}

function Welcome() {
  const { signOut } = useClerk();

  return <div>
    <div>Hello you are signed in</div>
    <UserButton />
    <button onClick={() => signOut()} >
      Sign out
    </button>
  </div>;
}

export default App;
