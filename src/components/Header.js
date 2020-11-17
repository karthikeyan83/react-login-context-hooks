
import './Header.css';
import React, {
  useContext,
} from 'react';
import AccountContext from '../context/account';

const Header = () => {

  const {isSignedIn} = useContext(AccountContext)
  return (
  <div className="nav">
  {isSignedIn && (<div className="right">
    <a className="item">Login</a>
    <a className="item">Signup</a>
  </div>
  )}
  
</div>
  );
}

export default Header;
