
import './App.css';
import Header from './components/Header';
import UserStatus from './components/UserStatus';
import { AccountProvider } from './context/account';
import React from 'react';
const changeStatus = () => {
  //setSignedIn(true)
}
const App = ()  => {
  return (
    <div className="App">
    <AccountProvider>
      <Header/>
      <header className="App-header">
        <UserStatus/>
      </header>
      </AccountProvider>
    </div>
  );
}

export default App;
