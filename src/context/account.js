
import React, {
  createContext, useState,
} from 'react';
const AccountContext = createContext(null);

export const AccountProvider = ({ account, children }) => {
  const [isSignedIn, setSignedIn] = useState(false);
  return (
    <AccountContext.Provider
      value={
        {
          isSignedIn,
          setSignedIn,
          
        }
      }
    >
      {children}
    </AccountContext.Provider>
  );
};


export const withAccount = Component => props => (
  <AccountContext.Consumer>
    {account => <Component account={account} {...props} />}
  </AccountContext.Consumer>
);

export default AccountContext;
