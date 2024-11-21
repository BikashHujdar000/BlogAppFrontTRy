import React, { useEffect, useState } from 'react';
import userContext from './userContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Bikash',
  });

  useEffect(() => {

    setUser({
      name: "Bikash Hujdar "
    })

  }, [])

  return (
    <userContext.Provider value={user}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;