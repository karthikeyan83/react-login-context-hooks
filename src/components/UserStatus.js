

import React, {
  useContext,
} from 'react';
import AccountContext from '../context/account';

const UserStatus = () => {
  const {isSignedIn,setSignedIn} = useContext(AccountContext)
  const changestatus = (val) => {
  	setSignedIn(val)
  }
 
  return (
    <>
    <button onClick= {() =>changestatus(true)}>change status to login</button>
     <button onClick= {() =>changestatus(false)}>change status to logout</button>
     </>

  );
}

export default UserStatus;
