import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authInitialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isLoggedIn: !!localStorage.getItem('user')
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        user: action.payload,
        isLoggedIn: true
      };
    case 'LOGOUT':
      localStorage.removeItem('user');
      return {
        user: null,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
