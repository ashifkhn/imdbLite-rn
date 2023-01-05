import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

const AuthenticationContext = createContext();
const AuthenticationContextProvider = ({children}) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthenticationContext.Provider value={{authenticated, setAuthenticated}}>
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuth = () => useContext(AuthenticationContext);

export {useAuth, AuthenticationContextProvider};
